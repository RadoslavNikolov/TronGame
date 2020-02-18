using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using WebServer.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Tron.Data;
using Microsoft.EntityFrameworkCore;
using WebServer.Hubs;
using Tron.Services.Infrastructure.Interfaces;
using Tron.Services;

namespace WebServer
{
    public class Startup
    {
        public const string CookieAuthScheme = "CookieAuthScheme";
        public const string JWTAuthScheme = "JWTAuthScheme";


        // TODO: you want this to be part of the configuration and a real secret!
        public static readonly SymmetricSecurityKey SecurityKey = new SymmetricSecurityKey(Encoding.Default.GetBytes("this would be a real secret"));

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<TronDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            services.AddCors();

            // Sets the default scheme to cookies
            services.AddAuthentication(CookieAuthScheme)
                // Now configure specific Cookie and JWT auth options
                .AddCookie(CookieAuthScheme, options =>
                {
                    // Set the cookie
                    options.Cookie.Name = "tronWebserver.AuthCookie";
                    // Set the samesite cookie parameter as none, otherwise CORS scenarios where the client uses a different domain wont work!
                    options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None;
                    // Simply return 401 responses when authentication fails (as opposed to default redirecting behaviour)
                    options.Events = new CookieAuthenticationEvents
                    {
                        OnRedirectToLogin = redirectContext =>
                        {
                            redirectContext.HttpContext.Response.StatusCode = 401;
                            return Task.CompletedTask;
                        }
                    };
                    // In order to decide the between both schemas
                    // inspect whether there is a JWT token either in the header or query string
                    options.ForwardDefaultSelector = ctx =>
                    {
                        if (ctx.Request.Query.ContainsKey("access_token")) return JWTAuthScheme;
                        if (ctx.Request.Headers.ContainsKey("Authorization")) return JWTAuthScheme;
                        return CookieAuthScheme;
                    };
                })
                .AddJwtBearer(JWTAuthScheme, options =>
                {
                    // Configure JWT Bearer Auth to expect our security key
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        LifetimeValidator = (before, expires, token, param) =>
                        {
                            return expires > DateTime.UtcNow;
                        },
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        ValidateActor = false,
                        ValidateLifetime = true,
                        IssuerSigningKey = SecurityKey,
                    };

                    // The JwtBearer scheme knows how to extract the token from the Authorization header
                    // but we will need to manually extract it from the query string in the case of requests to the hub
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = ctx =>
                        {
                            if (ctx.Request.Query.ContainsKey("access_token"))
                            {
                                ctx.Token = ctx.Request.Query["access_token"];
                            }
                            return Task.CompletedTask;
                        }
                    };
                });

            // Tells SignalR how to get the User unique Id from the ClaimsPrincipal
            services.AddSingleton<IUserIdProvider, NameUserIdProvider>();
            services.AddSignalR();
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

             //Services injection
            ConfigureInjection(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // Enable CORS so the Vue client can send requests
            app.UseCors(builder =>
                builder
                    .WithOrigins(new string [] {
                        "http://localhost:8080",
                        "http://localhost:8080/#/",
                        "http://localhost:58916"
                    })
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
            );

            app.UseRouting();

            app.UseAuthentication();

            // Register SignalR hubs
            app.UseSignalR(route =>
            {
                route.MapHub<MainHub>("/main-hub");
                route.MapHub<MainHub>("/main-hub-jwt");
            });

            app.UseHttpsRedirection();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureInjection(IServiceCollection services)
        {
            services.AddScoped<IGameService, GameService>();
            services.AddScoped<IStatisticsService, StatisticsService>();
        }
    }
}

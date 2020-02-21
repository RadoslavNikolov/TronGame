using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tron.Services.Infrastructure.Interfaces;

namespace WebServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatisticsController : ControllerBase
    {
        private readonly IStatisticsService _service;

        public StatisticsController(IStatisticsService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpGet()]
        public async Task<IEnumerable> Get()
        {
            return await _service.Ranking()
                .Take(20).ToListAsync();
        }
    }
}

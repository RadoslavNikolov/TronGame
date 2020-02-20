using Microsoft.AspNetCore.Mvc;

namespace WebServer.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => File("~/dist/index.html", "text/html");
    }
}
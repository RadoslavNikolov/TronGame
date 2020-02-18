using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;
using Tron.Data;
using Tron.Services.Infrastructure;
using Tron.Services.Infrastructure.Interfaces;
using Tron.Services.Models;
using WebServer.Hubs;
using WebServer.Infrastructure.Interfaces;

namespace WebServer.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private readonly IGameService _service;
        private readonly IHubContext<MainHub, IMainHub> _hubContext;

        private static ConcurrentBag<GameManagementViewModel> games = new ConcurrentBag<GameManagementViewModel>();

        public GameController(IGameService service,
            IHubContext<MainHub, IMainHub> mainHub)
        {
            _service = service;
            _hubContext = mainHub;
        }

        [HttpGet()]
        public async Task<IEnumerable> GetGames()
        {
            try
            {
                var list = (await _service.AvailableGames()).ToList();

                return list;

            }
            catch (Exception ex)
            {

                throw;
            }
        }

        [HttpGet("getById")]
        public async Task<GameManagementViewModel> GetGameById(int? id)
        {
            return await _service.GetGameViewByIdAsync(id);
        }

        [HttpGet("getByGameUid")]
        public async Task<GameManagementViewModel> GetGameByUid(Guid? gameUid)
        {
            return await _service.GetGameViewByUidAsync(gameUid);
        }

        [HttpPost()]
        [Authorize]
        public async Task<GameManagementViewModel> AddGame([FromBody] GameManagementModel model)
        {
            var user = User.Identity.Name;

            var entity = await _service.CreateGameAsync(model, user);
            var viewModel = entity.ToViewModel();
            games.Add(viewModel);

            await _hubContext.Clients.All.GameAdded(viewModel);

            return viewModel;
        }


        [HttpPost("{gameUid}/join")]
        [Authorize]
        public async Task<IActionResult> JoinGame(Guid gameUid, [FromBody] GameManagementModel model)
        {
            try
            {
                var game = await _service.JoinAsync(gameUid, User.Identity.Name);
                var viewModel = game.ToViewModel();

                await _hubContext.Clients.All.GameJoined(viewModel);

                return Ok(viewModel);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);
            }
            catch (GameFullException ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}

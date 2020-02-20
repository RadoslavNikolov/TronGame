using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tron.Services.Infrastructure;
using Tron.Services.Infrastructure.Interfaces;
using Tron.Services.Models;
using WebServer.Infrastructure;
using WebServer.Infrastructure.Interfaces;

namespace WebServer.Hubs
{
    public class MainHub : Hub<IMainHub>
    {
        // No need to implement here the methods defined by IQuestionHub, their purpose is simply
        // to provide a strongly typed interface.
        // Users of IHubContext still have to decide to whom should the events be sent
        // as in: await this.hubContext.Clients.All.SendQuestionScoreChange(question.Id, question.Score);

        private readonly IGameService _service;

        public MainHub(IGameService service)
        {
            _service = service;
        }

        // These methods will be called from the client
        public async Task GameTick(Guid gameUid)
        {
            var game = GameState.Instance.Tick(gameUid);
            if (game != null)
            {

                if (game.Player1?.OutOfTheBoundaries??false)
                {
                    await _service.GameOverAsync(gameUid, game.Player2?.Name, game.Level * 10);
                    await Clients.Group(gameUid.ToString()).GameOver(gameUid, game.Player2?.Name, game.Level * 10);
                }

                if (game.Player2?.OutOfTheBoundaries??false)
                {
                     await _service.GameOverAsync(gameUid, game.Player1?.Name, game.Level * 10);
                     await Clients.Group(gameUid.ToString()).GameOver(gameUid, game.Player1?.Name, game.Level * 10);
                }

                var p1 = game.Player1.ToShortModel();
                var p2 = game.Player2.ToShortModel();

                var p1Points = game.Player1.GetPoints();
                var p2Points = game.Player2.GetPoints();
                await Clients.Group(gameUid.ToString()).GameTicked(gameUid, game.TickCounter, p1, p2, p1Points, p2Points);
            }
        }

        public async Task PauseGame(Guid gameUid, string player)
        {        
            await Clients.Group(gameUid.ToString()).GamePaused(gameUid, $"\"{player}\" paused the game!");      
        }

        public async Task ResumeGame(Guid gameUid, string player)
        {        
            await Clients.Group(gameUid.ToString()).GameResumed(gameUid, $"\"{player}\" resumed the game!");      
        }

        public void PlayerMove(Guid gameUid, int playerNum, string direction)
        {
            GameState.Instance.PlayerMove(gameUid, playerNum, direction);
        }

        public async Task GameJoin(Guid gameUid, string player, int playerNum)
        {
            GameManagementViewModel persGame = await _service.GetGameViewByUidAsync(gameUid);

            var game = GameState.Instance.GameJoin(Context.ConnectionId, gameUid, player, playerNum, persGame);
 
            await Groups.AddToGroupAsync(Context.ConnectionId, gameUid.ToString());
            await Clients.Group(gameUid.ToString()).GamePlayerJoin(gameUid, game?.Player1, game?.Player2);

            if (game.Player1 != null && game.Player2 != null)
            {
                await Clients.Group(gameUid.ToString()).GameStart(game.ToShortModel());
            }
        }

        public void OutOfTheBoundaries(Guid gameUid, string player, int playerNum)
        {
            var game = GameState.Instance.OutOfTheBoundaries(gameUid, player, playerNum);
        }

        public async Task GameLeave(Guid gameUid, string player, int playerNum)
        {
            var (isDeleted , game) = GameState.Instance.GameLeave(gameUid, player, playerNum);

            if (!isDeleted)
            {
                await _service.LeaveGameAsync(gameUid, player);
            }

            await Groups.RemoveFromGroupAsync(Context.ConnectionId, gameUid.ToString());
            await Clients.Group(gameUid.ToString()).GamePlayerLeave(gameUid, player, game?.Player1, game?.Player2);

            if (isDeleted)
            {
                try
                {
                    await _service.DeleteGameAsync(game.GameUid);
                    await Clients.All.GameRemoved(game.GameUid);
                }
                catch
                {
                    //Ignore
                }
            }
        }

        public async Task JoinGameGroup(Guid gameUid)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, gameUid.ToString());
        }

        public async Task LeaveGameGroup(Guid gameUid)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, gameUid.ToString());
        }

        public async Task SendLiveChatMessage(string message, Guid? gameUid)
        {
            if (gameUid != null)
            {
                 await Clients.Group(gameUid.ToString()).LiveChatMessageReceived(Context.UserIdentifier, message);
            }
            else
            {
                await Clients.All.LiveChatMessageReceived(Context.UserIdentifier, message);
            }
        }
    }
}

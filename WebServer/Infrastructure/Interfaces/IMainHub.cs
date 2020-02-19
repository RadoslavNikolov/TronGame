using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Tron.Services.Models;
using Tron.Services.Models.GameEngine;
using WebServer.Models;

namespace WebServer.Infrastructure.Interfaces
{
    public interface IMainHub
    {
        Task GamePlayerJoin(Guid gameUid, Player player1, Player player2);
        Task GamePlayerLeave(Guid gameUid, string leaving, Player player1, Player player2);
        Task GameOver(Guid gameUid, string winner, int score);
        Task GameAdded(GameManagementViewModel game);
        Task GameJoined(GameManagementViewModel game);
        Task GameRemoved(Guid game);
        Task GameStart(GameShortModel game);
        Task GameTicked(Guid gameUid, int tickCounter, PlayerShortModel p1, PlayerShortModel p2, IEnumerable<PointDetailsModel> p1Points, IEnumerable<PointDetailsModel> p2Points);
        Task LiveChatMessageReceived(string username, string message);
        Task GamePaused(Guid gameUid, string message);
        Task GameResumed(Guid gameUid, string message);
    }
}

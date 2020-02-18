using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tron.Data;
using Tron.Services.Models;

namespace Tron.Services.Infrastructure.Interfaces
{
    public interface IGameService
    {
        Task<IEnumerable<GameManagementViewModel>> AvailableGames();

        Task<Game> GetGameByIdAsync(int? id);

        Task<Game> GetGameByUidAsync(Guid? gameUid);

        Task<GameManagementViewModel> GetGameViewByIdAsync(int? id);

        Task<GameManagementViewModel> GetGameViewByUidAsync(Guid? gameUid);

        Task<Game> CreateGameAsync(GameManagementModel model, string user);

        Task<Game> DeleteGameAsync(Guid? gameUid);

        Task<Game> DeleteGameAsync(int? id);

        Task<Game> JoinAsync(Guid gameUid, string user);

        Task<Game> LeaveGameAsync(Guid gameUid, string user);
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tron.Data;
using Tron.Services.Infrastructure;
using Tron.Services.Infrastructure.Interfaces;
using Tron.Services.Models;

namespace Tron.Services
{
    public class GameService : BaseService, IGameService
    {
        public GameService(TronDbContext context) 
            : base(context)
        {
        }

        public async Task<IEnumerable<GameManagementViewModel>> AvailableGames()
        {
            return (await _context.Game
                .AsNoTracking()
                .Include(x => x.GamePlayer)
                .Where(x => x.CanceledBy == null
                    && !x.Finished
                    && x.GamePlayer.Count < 2)
                .ToListAsync())
                .Select(x => x.ToViewModel())
                .OrderByDescending(x => x.Id);
        }

        public async Task<GameManagementViewModel> GetGameViewByIdAsync(int? id)
        {
            var entity = await _context.Game
                .AsNoTracking()
                .Include(x => x.GamePlayer)
                .SingleOrDefaultAsync(x => x.Id == id);

            return entity.ToViewModel();
        }

        public async Task<GameManagementViewModel> GetGameViewByUidAsync(Guid? gameUid)
        {
            var entity = await _context.Game
                .AsNoTracking()
                .Include(x => x.GamePlayer)
                .SingleOrDefaultAsync(x => x.GameUid == (gameUid.HasValue ? gameUid.ToString() : ""));

            return entity.ToViewModel();
        }

       public async Task<Game> GetGameByIdAsync(int? id)
        {
            var entity = await _context.Game
                .Include(x => x.GamePlayer)
                .SingleOrDefaultAsync(x => x.Id == id);

            return entity;
        }

        public async Task<Game> GetGameByUidAsync(Guid? gameUid)
        {
            var entity = await _context.Game
                .Include(x => x.GamePlayer)
                .SingleOrDefaultAsync(x => x.GameUid == (gameUid.HasValue ? gameUid.ToString() : ""));

            return entity;
        }


        public async Task<Game> CreateGameAsync(GameManagementModel model, string user)
        {
            var entity = new Game
            {
                Name = model.Name,
                Note = model.Note,
                GameLevel = model.GameLevel,
                Size = model.Size <= 0 ? (byte)1 : model.Size,
                GameUid = Guid.NewGuid().ToString()
            };

            entity.GamePlayer.Add(new GamePlayer
            {
                Name = user,
            });

            _context.Game.Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<Game> JoinAsync(Guid gameUid, string user)
        {
            var game = await GetGameByUidAsync(gameUid);

            if (game == null)
            {
                throw new ArgumentNullException(nameof(gameUid));
            }

            if (game.GamePlayer.Count >= 2)
            {
                throw new GameFullException("The game has been occupied");
            }

            var player = game.GamePlayer.FirstOrDefault(x => x.Name == user);
            if (player != null)
            {
                 throw new GameFullException("Already joined to the game");
            }

            game.GamePlayer.Add(new GamePlayer
            {
                Name = user
            });

            await _context.SaveChangesAsync();
            return game;
        }

        public async Task<Game> LeaveGameAsync(Guid gameUid, string user)
        {
            var game = await GetGameByUidAsync(gameUid);

            if (game == null)
            {
                throw new ArgumentNullException(nameof(gameUid));
            }

            if (!game.GamePlayer.Any(x => x.Name == user))
            {
                throw new UnauthorizedAccessException("Not part of the game");
            }

            
            var playerToRemove = game.GamePlayer.FirstOrDefault(x => x.Name == user);
            if (playerToRemove != null)
            {
                _context.GamePlayer.Remove(playerToRemove);
                await _context.SaveChangesAsync();
            }

            return game;
        }

        public async Task<Game> DeleteGameAsync(Guid? gameUid)
        {
            var game = await GetGameByUidAsync(gameUid);
            if (game != null)
            {
                _context.Remove(game);
                await _context.SaveChangesAsync();
            }

            return game;
        }

        public async Task<Game> DeleteGameAsync(int? id)
        {
            var game = await GetGameByIdAsync(id);
            if (game != null)
            {
                _context.Remove(game);
                await _context.SaveChangesAsync();
            }

            return game;
        }

        public async Task<Game> GameOverAsync(Guid gameUid, string winner, int score)
        {
            var game = await GetGameByUidAsync(gameUid);
            if (game == null)
            {
                //Todo
                return null;
            }

            if (game.Finished)
            {
                //Todo: already finished
                return null;
            }

            game.Finished = true;
            var player = game.GamePlayer.FirstOrDefault(x => x.Name.Equals(winner, StringComparison.OrdinalIgnoreCase));
            if (player != null)
            {
                player.IsWinner = true;
                player.Score = score;
            }

            await _context.SaveChangesAsync();
            return game;
        }
    }
}

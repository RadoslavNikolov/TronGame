using System;
using System.Linq;
using Tron.Data;
using Tron.Services.Models;
using Tron.Services.Models.GameEngine;

namespace Tron.Services.Infrastructure
{
    public static class GameExtensions
    {
        public static Game ToGame(this GameManagementModel m)
        {
            return m == null
                ? null
                : new Game
                {
                    Name = m.Name,
                    Note = m.Note,
                    GameLevel = m.GameLevel,
                    Size = m.ArenaSize ?? 800,
                    PlayerSize = (byte)(m.PlayerSize ?? 800),
                    GameUid = Guid.NewGuid().ToString()
                };
        }
        public static GameManagementViewModel ToViewModel(this Game e)
        {
            return e == null
                ? null
                : new GameManagementViewModel
                {
                    Id = e.Id,
                    Name = e.Name,
                    Player1Name = e.GamePlayer.Count > 0 ? e.GamePlayer.OrderByDescending(p => p.Id).FirstOrDefault().Name : default,
                    Player2Name = e.GamePlayer.Count > 1 ? e.GamePlayer.OrderByDescending(p => p.Id).Skip(1).FirstOrDefault().Name : default,
                    GameUid = Guid.Parse(e.GameUid),
                    Note = e.Note,
                    GameLevel = e.GameLevel,
                    Size = e.Size,
                    PlayerSize = e.PlayerSize
                };
        }

        public static PlayerShortModel ToShortModel(this Player p)
        {
            return p == null
               ? null
               : new PlayerShortModel
               {
                   Name = p.Name,
                   Direction = (int)p.Direction
               };
        }

        public static PointDetailsModel ToDetailsModel(this Point p)
        {
            return p == null
                ? null
                : new PointDetailsModel
                {
                    X = p.X,
                    Y = p.Y,
                    IsHead = p.IsHead
                };
        }

        public static GameShortModel ToShortModel(this GameModel g)
        {
            return g == null
                ? null
                : new GameShortModel
                {
                    Level = g.Level,
                    Size = g.Size,
                    Width = g.Width,
                    Height = g.Height,
                    ElementSize = g.ElementSize
                };
        }
    }
}

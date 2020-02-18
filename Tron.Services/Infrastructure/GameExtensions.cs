using System;
using System.Linq;
using Tron.Data;
using Tron.Services.Models;
using Tron.Services.Models.GameEngine;

namespace Tron.Services.Infrastructure
{
    public static class GameExtensions
    {
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
                    Size = e.Size
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

        public static PointShortModel ToShortModel(this Point p)
        {
            return p == null
                ? null
                : new PointShortModel
                {
                    X = p.X,
                    Y = p.Y
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

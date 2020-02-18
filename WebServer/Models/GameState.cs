using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Tron.Services.Models;
using Tron.Services.Models.GameEngine;
namespace WebServer.Models
{
    public class GameState
    {
        private static readonly Lazy<GameState> _instance = 
            new Lazy<GameState>(() => new GameState(), true);

        private readonly ConcurrentDictionary<Guid, GameModel> games = 
            new ConcurrentDictionary<Guid, GameModel>();

        private readonly object _myLock;
        
        private GameState()
        {
            _myLock = new object();
        }

        public static GameState Instance => _instance.Value;


        private void Remove<T>(ConcurrentBag<T> items, T itemToRemo)
        {
            items = new ConcurrentBag<T>(items?.Except(new[] { itemToRemo }));
        }

        public GameModel GameJoin(string connectionId, Guid gameUid, 
            string player, int playerNum, GameManagementViewModel persGame)
        {
            games.TryGetValue(gameUid, out GameModel game);

            if (game == null)
            {
                game = new GameModel
                {
                    GameUid = gameUid,
                    Level = persGame?.GameLevel??1,
                    Size = persGame?.Size??1
                };

                games[gameUid] = game;
            }

            var p = new Player(game.ElementSize)
            {
                Name = player,
                ConnectionId = connectionId,
            };

            lock (_myLock)
            {
                if (playerNum == 1)
                {
                    game.Player1 = p;
                }
                else
                {
                    game.Player2 = p;
                }
            }

            return game;
        }

        public (bool isDeleted , GameModel game) GameLeave(Guid gameUid, string player, int playerNum)
        {
            games.TryGetValue(gameUid, out GameModel game);
            if (game == null)
            {
                //Todo
            }

            lock (_myLock)
            {
                if (playerNum == 1)
                {
                    game.Player1 = null;
                }
                else
                {
                    game.Player2 = null;
                }
            }

            if (game.Player1 == null && game.Player2 == null)
            {
                games.Remove(gameUid, out GameModel g);
                return (true, game);
            }

            return (false, game);
        }

        public void PlayerMove(Guid gameUid, int playerNum, string direction)
        {
            if (games.TryGetValue(gameUid, out GameModel game))
            {
                var p = game.GetPlayerByNum(playerNum);
                p?.SetDirection(direction);
            }
        }

        public GameModel Tick(Guid gameUid)
        {
            if (games.TryGetValue(gameUid, out GameModel game))
            {
                game.IncerementTickCounter();

                game.Player1?.AddToTheHead();
                game.Player2?.AddToTheHead();

                if (game.TickCounter % (100 / (game.Level <= 0 ? 1 : game.Level)) == 0)
                {
                    game.Player1?.AddToTheHead();
                    game.Player2?.AddToTheHead();

                }

                game.Player1?.RemoveLast();
                game.Player2?.RemoveLast();
            }

            return game;
        }
    }
}

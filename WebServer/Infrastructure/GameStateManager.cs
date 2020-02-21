using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Tron.Services.Models;
using Tron.Services.Models.GameEngine;

namespace WebServer.Infrastructure
{
    /// <summary>
    /// Singleton class responsible for the games
    /// </summary>
    public class GameStateManager
    {
        private static readonly Lazy<GameStateManager> _instance =
            new Lazy<GameStateManager>(() => new GameStateManager(), true);

        /// <summary>
        /// Games store
        /// </summary>
        private readonly ConcurrentDictionary<Guid, GameModel> games =
            new ConcurrentDictionary<Guid, GameModel>();

        private readonly object _myLock;

        private GameStateManager()
        {
            _myLock = new object();
        }

        public static GameStateManager Instance => _instance.Value;

        /// <summary>
        /// Jons player to a game
        /// </summary>
        /// <param name="connectionId">SignarR connection id</param>
        /// <param name="gameUid">Uid of the game</param>
        /// <param name="player"></param>
        /// <param name="playerNum"></param>
        /// <param name="persGame">Game stored in the DB with the givven game Uid</param>
        /// <returns></returns>
        public GameModel GameJoin(string connectionId, Guid gameUid,
            string player, int playerNum, GameManagementViewModel persGame)
        {
            games.TryGetValue(gameUid, out GameModel game);

            if (game == null)
            {
                game = new GameModel(persGame.PlayerSize??8, persGame.Size, persGame.Size)
                {
                    GameUid = gameUid,
                    Level = persGame?.GameLevel ?? 1,
                    Size = persGame?.Size ?? 800
                };

                games[gameUid] = game;
            }

            var p = new Player(playerNum, game.ElementSize)
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

        /// <summary>
        /// Removes a player from a game
        /// </summary>
        /// <param name="gameUid">Uid of the game</param>
        /// <param name="player"></param>
        /// <param name="playerNum"></param>
        /// <returns></returns>
        public (bool isDeleted, GameModel game) GameLeave(Guid gameUid, string player, int playerNum)
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

                if (game.TickCounter % (30 / (game.Level <= 0 ? 1 : game.Level)) == 0)
                {
                    game.Player1?.AddToTheHead();
                    game.Player2?.AddToTheHead();

                }

                game.Player1?.RemoveLast();
                game.Player2?.RemoveLast();
            }

            return game;
        }

        /// <summary>
        /// Marks a player when it goes out of the borad boundaries and signal the other player.
        /// </summary>
        /// <param name="gameUid"></param>
        /// <param name="player"></param>
        /// <param name="playerNum"></param>
        /// <returns></returns>
        public GameModel OutOfTheBoundaries(Guid gameUid, string player, int playerNum)
        {
            games.TryGetValue(gameUid, out GameModel game);
            if (game == null)
            {
                //Todo
            }

            lock (_myLock)
            {
                if (playerNum == 1 && game.Player1 != null)
                {
                    game.Player1.OutOfTheBoundaries = true;
                }
                else if(game.Player2 != null)
                {
                    game.Player2.OutOfTheBoundaries = true;
                }
            }

            return game;
        }
    }
}

using System;
namespace Tron.Services.Models.GameEngine
{
    public class GameModel
    {
        private int _tickCounter;
        private object _myLock;

        /// <summary>
        /// Size in px
        /// </summary>
        private readonly int _elementSize;

        /// <summary>
        /// Initializes a new instance of the <see cref="GameModel"/> class.
        /// </summary>
        public GameModel(int elementSize = 8, int width = 800, int height = 600)
        {
            _elementSize = elementSize;
            _tickCounter = 0;
            _myLock = new object();
            this.Width = width;
            this.Height = height;
        }

        /// <summary>
        /// Gets or sets the value indicating whether the game is over.
        /// </summary>
        public bool IsOver { get; private set; }

        /// <summary>
        /// Gets or sets Player 1 of the game
        /// </summary>
        public Player Player1 { get; set; }

        /// <summary>
        /// Gets or sets Player 2 of the game
        /// </summary>
        public Player Player2 { get; set; }

        public Guid GameUid { get; set; }

        public byte Level { get; set; }

        public byte Size { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }

        public int TickCounter => _tickCounter;

        public int ElementSize => _elementSize;

        public void IncerementTickCounter()
        {
            lock (_myLock)
            {
                _tickCounter++;
            }
        }

        public Player GetPlayerByNum(int playerNum)
        {
            if (playerNum == 1)
            {
                return Player1;
            }

            if (playerNum == 2)
            {
                return Player2;
            }

            return null;
        }

        public Player GetPlayerByName(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return null;
            }

            if ((Player1?.Name??"").Equals(name, StringComparison.OrdinalIgnoreCase))
            {
                return Player1;
            }

            if ((Player2?.Name??"").Equals(name, StringComparison.OrdinalIgnoreCase))
            {
                return Player2;
            }

            return null;
        }
    }
}

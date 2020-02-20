using System;
using System.Collections.Generic;

namespace Tron.Data
{
    public partial class Game
    {
        public Game()
        {
            Chat = new HashSet<Chat>();
            GamePlayer = new HashSet<GamePlayer>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CtratedAtUtc { get; set; }
        public string Note { get; set; }
        public string CanceledBy { get; set; }
        public byte GameLevel { get; set; }
        public int Size { get; set; }
        public string GameUid { get; set; }
        public bool Finished { get; set; }
        public byte? PlayerSize { get; set; }

        public virtual ICollection<Chat> Chat { get; set; }
        public virtual ICollection<GamePlayer> GamePlayer { get; set; }
    }
}

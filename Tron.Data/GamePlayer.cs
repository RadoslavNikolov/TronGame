using System;
using System.Collections.Generic;

namespace Tron.Data
{
    public partial class GamePlayer
    {
        public int Id { get; set; }
        public int? GameId { get; set; }
        public string Name { get; set; }
        public int? Score { get; set; }
        public bool IsWinner { get; set; }

        public virtual Game Game { get; set; }
    }
}

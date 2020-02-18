using System;
using System.Collections.Generic;

namespace Tron.Data
{
    public partial class Chat
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int? GameId { get; set; }
        public DateTime CreatedAtUtc { get; set; }
        public string Creator { get; set; }

        public virtual Game Game { get; set; }
    }
}

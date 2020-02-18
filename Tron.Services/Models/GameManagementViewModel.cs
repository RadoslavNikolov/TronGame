using System;

namespace Tron.Services.Models
{
    public class GameManagementViewModel

    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Player1Name { get; set; }
        public string Player2Name { get; set; }
        public Guid GameUid { get; set; }
        public string Note { get; set; }
        public byte GameLevel { get; set; }
        public byte Size { get; set; }
    }
}

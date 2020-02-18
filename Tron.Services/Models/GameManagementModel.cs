using System;
using System.ComponentModel.DataAnnotations;

namespace Tron.Services.Models
{
    public class GameManagementModel
    {
        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; }
        public string Note { get; set; }
        public Guid GameUid { get; set; }
        public string CreatedBy { get; set; }
        public byte GameLevel { get; set; }
        public byte Size { get; set; }
    }
}

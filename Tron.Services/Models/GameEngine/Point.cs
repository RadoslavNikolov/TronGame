using Tron.Services.Infrastructure;

namespace Tron.Services.Models.GameEngine
{
    public class Point
    {
        public int X { get; set; }

        public int Y { get; set; }

        public Direction Direction { get; set; }

        public int ElementSize { get; set; }

        public bool IsHead { get; set; }
    }
}

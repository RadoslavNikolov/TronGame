using System;
using System.Collections.Generic;
using System.Linq;
using Tron.Services.Infrastructure;

namespace Tron.Services.Models.GameEngine
{
    /// <summary>
    /// The player class. Each player of the game would be an instance of this class
    /// </summary>
    public class Player
    {
        private Direction _direction;
        private readonly LinkedList<Point> _points;

        private readonly int _elementSize;
        private readonly object _myDirectionLock;
        private readonly object _myPointsLock;

        public Player(int elementSize = 4)
        {
            _myDirectionLock = new object();
            _myPointsLock = new object();

            _points = new LinkedList<Point>();
            _elementSize = elementSize;

            Random rnd = new Random();
            var direction = (Direction)rnd.Next(1,4);
            _direction = direction;
            _points.AddFirst(new Point { X = rnd.Next(0, (600 / _elementSize) - _elementSize), Y = rnd.Next(0, (400 / _elementSize) - _elementSize), Direction = direction, ElementSize = _elementSize });

        }
        /// <summary>
        /// Gets or sets the name of the player. This would be ser at the time user register to the gameHub.
        /// </summary>
        public string Name { get; set; }


        /// <summary>
        /// Gets or sets the opponent player. The player against whom the player would be playing.
        /// </summary>

        /// <summary>
        /// Gets or sets the connection id of the player connection with the gameHub.
        /// </summary>
        public string ConnectionId { get; set; }

        public Direction Direction => _direction;

        public void SetDirection(string direction)
        {
            lock (_myDirectionLock)
            {
                if (direction.Equals("right", StringComparison.OrdinalIgnoreCase))
                {
                    switch (_direction)
                    {
                        case Direction.Up:
                            _direction = Direction.Right;
                            break;
                        case Direction.Right:
                            _direction = Direction.Down;
                            break;
                        case Direction.Down:
                            _direction = Direction.Left;
                            break;
                        case Direction.Left:
                            _direction = Direction.Up;
                            break;
                        default:
                            break;
                    }

                }
                else
                {
                    switch (_direction)
                    {
                        case Direction.Up:
                            _direction = Direction.Left;
                            break;
                        case Direction.Right:
                            _direction = Direction.Up;
                            break;
                        case Direction.Down:
                            _direction = Direction.Right;
                            break;
                        case Direction.Left:
                            _direction = Direction.Down;
                            break;
                        default:
                            break;
                    }
                }
            }
            //Todo: Comes left ot tight string
        }

        public void AddToTheHead()
        {
            lock (_myPointsLock)
            {
                var first = _points.First;
                Point point = new Point { Direction = _direction , ElementSize = _elementSize};
                switch (point.Direction)
                {
                    case Direction.Up:
                        point.X = first.Value.X;
                        point.Y = first.Value.Y - 1;
                        break;
                    case Direction.Right:
                        point.X = first.Value.X + 1;
                        point.Y = first.Value.Y;
                        break;
                    case Direction.Down:
                        point.X = first.Value.X;
                        point.Y = first.Value.Y + 1;
                        break;
                    case Direction.Left:
                        point.X = first.Value.X - 1;
                        point.Y = first.Value.Y;
                        break;
                    default:
                        break;
                }

                _points.AddFirst(point);
            }
        }

        public void RemoveLast()
        {
            if (_points.Count > 1)
            {
                lock (_myPointsLock)
                {
                    _points.RemoveLast();
                }
            }
        }

        public void AddToTheTail()
        {
            lock (_myPointsLock)
            {
                var last = _points.Last;
                Point point = new Point { Direction = last.Value.Direction, ElementSize = _elementSize };
                switch (last.Value.Direction)
                {
                    case Direction.Up:
                        point.X = last.Value.X;
                        point.Y = last.Value.Y + 1;
                        break;
                    case Direction.Right:
                        point.X = last.Value.X + 1;
                        point.Y = last.Value.Y;
                        break;
                    case Direction.Down:
                        point.X = last.Value.X;
                        point.Y = last.Value.Y - 1;
                        break;
                    case Direction.Left:
                        point.X = last.Value.X - 1;
                        point.Y = last.Value.Y;
                        break;
                    default:
                        break;
                }

                _points.AddLast(point);
            }
        }

        public IEnumerable<PointDetailsModel> GetPoints()
        {
            lock (_myPointsLock)
            {
                return _points.ToArray().Select(x => x.ToDetailsModel()).AsEnumerable();
            }
        }
    }
}

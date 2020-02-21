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

        public Player(int playerNum, int elementSize = 4)
        {
            _myDirectionLock = new object();
            _myPointsLock = new object();

            _points = new LinkedList<Point>();
            _elementSize = elementSize;

            Random rnd = new Random();
            var direction = playerNum == 1 ? Direction.Down : Direction.Up;
            _direction = direction;

           _points.AddFirst(new Point { X = playerNum == 1 ? 5 : 35, Y = playerNum == 1 ? 5 : 35 , Direction = direction, ElementSize = _elementSize });
            AddToTheTail();
            AddToTheTail();

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

        public bool OutOfTheBoundaries { get; set; }

        public Direction Direction => _direction;

        /// <summary>
        /// Changes player direction
        /// </summary>
        /// <param name="direction">Pressed button diection</param>
        public void SetDirection(string direction)
        {
            lock (_myDirectionLock)
            {
                // Current player direction
                switch (_direction)
                {
                    case Direction.Up:
                    case Direction.Down:
                        switch (direction)
                        {
                            case "left":
                                _direction = Direction.Left;
                                break;
                            case "right":
                                _direction = Direction.Right;
                                break;
                            case "up":
                            case "down":
                            default:
                                break;
                        }
                        break;
                    case Direction.Right:
                    case Direction.Left:
                        switch (direction)
                        {
                            case "up":
                                _direction = Direction.Up;
                                break;
                            case "down":
                                _direction = Direction.Down;
                                break;
                            case "left":
                            case "right":
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
            }
        }

        /// <summary>
        /// Adds a point to the head of the player points
        /// </summary>
        public void AddToTheHead()
        {
            lock (_myPointsLock)
            {
                var first = _points.First;
                Point point = new Point { Direction = _direction, ElementSize = _elementSize };
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

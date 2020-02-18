using System;
using System.Collections.Generic;
using System.Text;

namespace Tron.Services.Infrastructure
{
    public class GameFullException : Exception
    {
        public GameFullException(string message)
            :base(message)
        {

        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using Tron.Data;
using Tron.Services.Infrastructure.Interfaces;

namespace Tron.Services
{
    public class BaseService : IBaseService
    {
        private bool disposed;

        protected TronDbContext _context { get; private set; }

        protected BaseService(TronDbContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern.
        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
            {
                return;
            }

            if (disposing)
            {
                // Free any other managed objects here.
                _context.Dispose();
            }

            // Free any unmanaged objects here.

            disposed = true;
        }

        ~BaseService()
        {
            Dispose(false);
        }
    }
}

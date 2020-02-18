using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Tron.Data;
using Tron.Services.Infrastructure.Interfaces;

namespace Tron.Services
{
    public class StatisticsService : BaseService, IStatisticsService
    {
        public StatisticsService(TronDbContext context) 
            : base(context)
        {
        }

        public IQueryable<VRanking> Ranking()
        {
            return _context.VRanking
                .AsNoTracking()
                .OrderBy(x => x.Rank);
        }
    }
}

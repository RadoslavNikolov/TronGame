using System.Linq;
using Tron.Data;

namespace Tron.Services.Infrastructure.Interfaces
{
    public interface IStatisticsService
    {
        IQueryable<VRanking> Ranking();
    }
}

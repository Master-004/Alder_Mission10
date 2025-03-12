using Alder_Mission10.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Alder_Mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;

        public BowlerController(BowlerDbContext temp) { 
        
            _bowlerContext = temp;
        }


        [HttpGet(Name = "Bowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlerContext.Bowlers
                .Include(b => b.TeamName)
                .ToList();

            return (bowlerList);
        }
    }

}

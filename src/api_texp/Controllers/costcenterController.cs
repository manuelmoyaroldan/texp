using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using model_texp;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace api_texp.Controllers
{
    [Route("api/[controller]")]
    public class costcenterController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public costcenterController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<costcenterController>();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<costcenter> Get()
        {
            var costcenters = _context.costcenter.Include(c=> c.company).ToList<costcenter>();

            _logger.LogInformation(costcenters.Count.ToString());

            return costcenters;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

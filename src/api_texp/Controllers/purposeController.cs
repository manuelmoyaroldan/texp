using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using model_texp;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace api_texp.Controllers
{
    [Route("api/[controller]")]
    public class purposeController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public purposeController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<purposeController>();
        }

        [HttpGet]
        public IEnumerable<purpose> Get()
        {
            var purposes= _context.purpose.ToList<purpose>();

            _logger.LogInformation(purposes.Count.ToString());

            return purposes;
        }

        [HttpGet("{id}")]
        public purpose Get(int id)
        {
            var purpose = _context.purpose.Where(p => p.purposeId == id).FirstOrDefault<purpose>();

            _logger.LogInformation(id.ToString());

            return purpose;
        }

        [HttpPost]
        public void Post([FromBody]purpose value)
        {
            var purpose = new purpose();

            purpose.purposeId = value.purposeId;
            purpose.name = value.name;
            
            _context.purpose.Add(purpose);
            _context.SaveChanges();

            _logger.LogInformation("Purpose post");
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]purpose value)
        {
            var purpose = _context.purpose.Where(p=>p.purposeId==id).FirstOrDefault<purpose>();
            if (purpose != null)
            {
                purpose.purposeId = value.purposeId;
                purpose.name= value.name;

                _context.SaveChanges();
            }
            _logger.LogInformation("Purpose put");
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var purpose = _context.purpose.Where(p => p.purposeId == id).FirstOrDefault<purpose>();
            if (purpose != null)
            {
                purpose.isActive = false;
                _context.SaveChanges();
            }
            _logger.LogInformation("Purpose deactivate");
        }
    }
}

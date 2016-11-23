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
            _logger = loggerFactory.CreateLogger<roleController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<purpose> Get()
        {
            var list = _context.purpose.ToList<purpose>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var purpose = _context.purpose.Where(c => c.purposeId == id).FirstOrDefault<purpose>();

            if (purpose != null)
            {
                return Ok(purpose);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]purpose value)
        {
            var purpose = new purpose();

            purpose.purposeId = value.purposeId;
            purpose.name = value.name;
            purpose.isActive = true;

            _context.purpose.Add(purpose);
            _context.SaveChanges();

            var send = _context.purpose.Where(c => c.purposeId == purpose.purposeId).FirstOrDefault<purpose>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]purpose value)
        {
            var purpose = _context.purpose.Where(c => c.purposeId == id).FirstOrDefault<purpose>();

            if (purpose != null)
            {
                purpose.name = value.name;

                _context.SaveChanges();

                var send = _context.purpose.Where(c => c.purposeId == purpose.purposeId).FirstOrDefault<purpose>();

                return Ok(send);
            }
            else
            {
                return NotFound();
            }
        }

        // DEACTIVATE
        [Route("deactivate/{id}")]
        [HttpPut()]
        public IActionResult deactivate(int id, [FromBody]purpose value)
        {
            var purpose = _context.purpose.Where(c => c.purposeId == id).FirstOrDefault<purpose>();

            if (purpose != null)
            {
                purpose.isActive = false;

                _context.SaveChanges();

                return Ok(purpose);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]purpose value)
        {
            var purpose = _context.purpose.Where(c => c.purposeId == id).FirstOrDefault<purpose>();

            if (purpose != null)
            {
                purpose.isActive = true;

                _context.SaveChanges();

                return Ok(purpose);
            }
            else
            {
                return NotFound();
            }

        }

        //--------------------- DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var purpose = _context.purpose.Where(c => c.purposeId == id).FirstOrDefault<purpose>();

            if (purpose != null)
            {
                _context.Remove(purpose);

                _context.SaveChanges();

                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}

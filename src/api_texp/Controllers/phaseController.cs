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
    public class phaseController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public phaseController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<roleController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<phase> Get()
        {
            var list = _context.phase.ToList<phase>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var phase = _context.phase.Where(c => c.phaseId == id).FirstOrDefault<phase>();

            if (phase != null)
            {
                return Ok(phase);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]phase value)
        {
            var phase = new phase();

            phase.phaseId = value.phaseId;
            phase.name = value.name;
            phase.isActive = true;

            _context.phase.Add(phase);
            _context.SaveChanges();

            var send = _context.phase.Where(c => c.phaseId == phase.phaseId).FirstOrDefault<phase>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]phase value)
        {
            var phase = _context.phase.Where(c => c.phaseId == id).FirstOrDefault<phase>();

            if (phase != null)
            {
                phase.name = value.name;

                _context.SaveChanges();

                var send = _context.phase.Where(c => c.phaseId == phase.phaseId).FirstOrDefault<phase>();

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
        public IActionResult deactivate(int id, [FromBody]phase value)
        {
            var phase = _context.phase.Where(c => c.phaseId == id).FirstOrDefault<phase>();

            if (phase != null)
            {
                phase.isActive = false;

                _context.SaveChanges();

                return Ok(phase);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]phase value)
        {
            var phase = _context.phase.Where(c => c.phaseId == id).FirstOrDefault<phase>();

            if (phase != null)
            {
                phase.isActive = true;

                _context.SaveChanges();

                return Ok(phase);
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
            var phase = _context.phase.Where(c => c.phaseId == id).FirstOrDefault<phase>();

            if (phase != null)
            {
                _context.Remove(phase);

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

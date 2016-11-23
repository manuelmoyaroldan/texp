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
    public class traveltypeController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public traveltypeController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<roleController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<traveltype> Get()
        {
            var list = _context.traveltype.ToList<traveltype>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var traveltype = _context.traveltype.Where(c => c.traveltypeId == id).FirstOrDefault<traveltype>();

            if (traveltype != null)
            {
                return Ok(traveltype);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]traveltype value)
        {
            var traveltype = new traveltype();

            traveltype.traveltypeId = value.traveltypeId;
            traveltype.name = value.name;
            traveltype.isActive = true;

            _context.traveltype.Add(traveltype);
            _context.SaveChanges();

            var send = _context.traveltype.Where(c => c.traveltypeId == traveltype.traveltypeId).FirstOrDefault<traveltype>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]traveltype value)
        {
            var traveltype = _context.traveltype.Where(c => c.traveltypeId == id).FirstOrDefault<traveltype>();

            if (traveltype != null)
            {
                traveltype.name = value.name;

                _context.SaveChanges();

                var send = _context.traveltype.Where(c => c.traveltypeId == traveltype.traveltypeId).FirstOrDefault<traveltype>();

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
        public IActionResult deactivate(int id, [FromBody]traveltype value)
        {
            var traveltype = _context.traveltype.Where(c => c.traveltypeId == id).FirstOrDefault<traveltype>();

            if (traveltype != null)
            {
                traveltype.isActive = false;

                _context.SaveChanges();

                return Ok(traveltype);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]traveltype value)
        {
            var traveltype = _context.traveltype.Where(c => c.traveltypeId == id).FirstOrDefault<traveltype>();

            if (traveltype != null)
            {
                traveltype.isActive = true;

                _context.SaveChanges();

                return Ok(traveltype);
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
            var traveltype = _context.traveltype.Where(c => c.traveltypeId == id).FirstOrDefault<traveltype>();

            if (traveltype != null)
            {
                _context.Remove(traveltype);

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

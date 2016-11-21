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
    public class travelphaseController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public travelphaseController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<travelphaseController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<travelphase> Get()
        {
            var list = _context.travelphase.ToList<travelphase>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var travelphase = _context.travelphase.Where(c => c.travelphaseId == id).FirstOrDefault<travelphase>();

            if (travelphase != null)
            {
                return Ok(travelphase);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]travelphase value)
        {
            var travelphase = new travelphase();

            travelphase.order = value.order;
            travelphase.order_accept = value.order_accept;
            travelphase.order_reject = value.order_reject;
            if (value.company != null) travelphase.companyId = value.company.companyId;
            if (value.phase != null) travelphase.phaseId = value.phase.phaseId;
            if (value.role != null) travelphase.roleId = value.role.roleId;
            travelphase.isActive = true;

            _context.travelphase.Add(travelphase);
            _context.SaveChanges();

            var send = _context.travelphase.Where(c => c.travelphaseId == travelphase.travelphaseId).FirstOrDefault<travelphase>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]travelphase value)
        {
            var travelphase = _context.travelphase.Where(c => c.travelphaseId == id).FirstOrDefault<travelphase>();

            if (travelphase != null)
            {
                travelphase.order = value.order;
                travelphase.order_accept = value.order_accept;
                travelphase.order_reject = value.order_reject;
                if (value.company != null) travelphase.companyId = value.company.companyId;
                if (value.phase != null) travelphase.phaseId = value.phase.phaseId;
                if (value.role!= null) travelphase.roleId = value.role.roleId;

                _context.SaveChanges();

                var send = _context.travelphase.Where(c => c.travelphaseId == travelphase.travelphaseId).FirstOrDefault<travelphase>();

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
        public IActionResult deactivate(int id, [FromBody]travelphase value)
        {
            var travelphase = _context.travelphase.Where(c => c.travelphaseId == id).FirstOrDefault<travelphase>();

            if (travelphase != null)
            {
                travelphase.isActive = false;

                _context.SaveChanges();

                return Ok(travelphase);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]travelphase value)
        {
            var travelphase = _context.travelphase.Where(c => c.travelphaseId == id).FirstOrDefault<travelphase>();

            if (travelphase != null)
            {
                travelphase.isActive = true;

                _context.SaveChanges();

                return Ok(travelphase);
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
            var travelphase = _context.travelphase.Where(c => c.travelphaseId == id).FirstOrDefault<travelphase>();

            if (travelphase != null)
            {
                _context.Remove(travelphase);

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

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

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<costcenter> Get()
        {
            var list= _context.costcenter.Include(c => c.company).ToList<costcenter>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var costcenter = _context.costcenter.Where(c => c.costcenterId == id).FirstOrDefault<costcenter>();

            if (costcenter != null)
            {
                return Ok(costcenter);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]costcenter value)
        {
            var costcenter = new costcenter();

            costcenter.name = value.name;
            costcenter.code = value.code;
            costcenter.isActive = true;
            if (value.company != null) costcenter.companyId = value.company.companyId;

            _context.costcenter.Add(costcenter);
            _context.SaveChanges();

            var send = _context.costcenter.Include(c=> c.company).Where(c => c.costcenterId == costcenter.costcenterId).FirstOrDefault<costcenter>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]costcenter value)
        {
            var costcenter = _context.costcenter.Where(c => c.costcenterId == id).FirstOrDefault<costcenter>();

            if (costcenter != null)
            {
                costcenter.name = value.name;
                costcenter.code = value.code;
                if (value.company != null) costcenter.companyId = value.company.companyId;

                _context.SaveChanges();

                var send = _context.costcenter.Include(c=> c.company).Where(c => c.costcenterId == costcenter.costcenterId).FirstOrDefault<costcenter>();

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
        public IActionResult deactivate(int id, [FromBody]costcenter value)
        {
            var costcenter = _context.costcenter.Where(c => c.costcenterId == id).FirstOrDefault<costcenter>();

            if (costcenter != null)
            {
                costcenter.isActive = false;

                _context.SaveChanges();

                return Ok(costcenter);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]costcenter value)
        {
            var costcenter = _context.costcenter.Where(c => c.costcenterId == id).FirstOrDefault<costcenter>();

            if (costcenter != null)
            {
                costcenter.isActive = true;

                _context.SaveChanges();

                return Ok(costcenter);
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
            var costcenter = _context.costcenter.Where(c => c.costcenterId == id).FirstOrDefault<costcenter>();

            if (costcenter != null)
            {
                _context.Remove(costcenter);

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

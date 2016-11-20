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
    public class roleController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public roleController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<roleController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<role> Get()
        {
            var list = _context.role.ToList<role>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var role = _context.role.Where(c => c.roleId == id).FirstOrDefault<role>();

            if (role != null)
            {
                return Ok(role);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]role value)
        {
            var role = new role();

            role.roleId = value.roleId;
            role.name = value.name;
            role.isActive = true;

            _context.role.Add(role);
            _context.SaveChanges();

            var send = _context.role.Where(c => c.roleId == role.roleId).FirstOrDefault<role>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]role value)
        {
            var role = _context.role.Where(c => c.roleId == id).FirstOrDefault<role>();

            if (role != null)
            {
                role.name = value.name;

                _context.SaveChanges();

                var send = _context.role.Where(c => c.roleId == role.roleId).FirstOrDefault<role>();

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
        public IActionResult deactivate(int id, [FromBody]role value)
        {
            var role = _context.role.Where(c => c.roleId == id).FirstOrDefault<role>();

            if (role != null)
            {
                role.isActive = false;

                _context.SaveChanges();

                return Ok(role);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]role value)
        {
            var role = _context.role.Where(c => c.roleId == id).FirstOrDefault<role>();

            if (role != null)
            {
                role.isActive = true;

                _context.SaveChanges();

                return Ok(role);
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
            var role = _context.role.Where(c => c.roleId == id).FirstOrDefault<role>();

            if (role != null)
            {
                _context.Remove(role);

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

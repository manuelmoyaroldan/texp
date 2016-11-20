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
    public class userController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public userController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<userController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<user> Get()
        {
            var list = _context.user.Include(c => c.company).Include(c=> c.costcenter).ToList<user>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _context.user.Where(c => c.userId == id).FirstOrDefault<user>();

            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]user value)
        {
            var user = new user();

            user.name = value.name;
            user.isActive = true;
            if (value.company != null) user.companyId = value.company.companyId;
            if (value.costcenter != null) user.costcenterId = value.costcenter.costcenterId;

            _context.user.Add(user);
            _context.SaveChanges();

            var send = _context.user.Include(c => c.company).Include(c=> c.costcenter).Where(c => c.userId == user.userId).FirstOrDefault<user>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]user value)
        {
            var user = _context.user.Where(c => c.userId == id).FirstOrDefault<user>();

            if (user != null)
            {
                user.name = value.name;
                if (value.company != null) user.companyId = value.company.companyId;
                if (value.costcenter != null) user.costcenterId = value.costcenter.costcenterId;

                _context.SaveChanges();

                var send = _context.user.Include(c => c.company).Include(c=> c.costcenter).Where(c => c.userId == user.userId).FirstOrDefault<user>();

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
        public IActionResult deactivate(int id, [FromBody]user value)
        {
            var user = _context.user.Where(c => c.userId == id).FirstOrDefault<user>();

            if (user != null)
            {
                user.isActive = false;

                _context.SaveChanges();

                return Ok(user);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]user value)
        {
            var user = _context.user.Where(c => c.userId == id).FirstOrDefault<user>();

            if (user != null)
            {
                user.isActive = true;

                _context.SaveChanges();

                return Ok(user);
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
            var user = _context.user.Where(c => c.userId == id).FirstOrDefault<user>();

            if (user != null)
            {
                _context.Remove(user);

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

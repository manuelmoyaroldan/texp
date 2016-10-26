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

        // GET: api/values
        [HttpGet]
        public IEnumerable<role> Get()
        {
            var roles = _context.role.ToList<role>();

            _logger.LogInformation(roles.Count.ToString());

            return roles;
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

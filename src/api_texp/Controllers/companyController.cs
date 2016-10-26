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
    public class companyController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public companyController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<companyController>();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<company> Get()
        {
            var companies = _context.company.ToList<company>();

            _logger.LogInformation(companies.Count.ToString());

            return companies;
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

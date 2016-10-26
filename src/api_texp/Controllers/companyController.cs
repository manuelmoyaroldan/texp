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

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<company> Get()
        {
            var companies = _context.company.ToList<company>();

            _logger.LogInformation(companies.Count.ToString());

            return companies;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                return Ok(company);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]company value)
        {
            var company = new company();

            company.name = value.name;

            _context.company.Add(company);
            _context.SaveChanges();

            var send= _context.company.Where(c => c.companyId == company.companyId).FirstOrDefault<company>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]company value)
        {
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                company.name = value.name;

                _context.SaveChanges();

                var send = _context.company.Where(c => c.companyId == company.companyId).FirstOrDefault<company>();

                return Ok(send);
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
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                company.isActive = false;

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

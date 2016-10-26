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
    public class currencyController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public currencyController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<currencyController>();
        }

        // GET
        [HttpGet]
        public IEnumerable<currency> Get()
        {
            var currencies = _context.currency.ToList<currency>();

            _logger.LogInformation(currencies.Count.ToString());

            return currencies;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var currency = _context.currency.Where(c => c.currencyId == id).FirstOrDefault<currency>();

            if (currency!= null)
            {
                return Ok(currency);
            }
            else
            {
                return NotFound();
            }

        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]currency value)
        {
            var currency = new currency();

            currency.name = value.name;

            _context.currency.Add(currency);
            _context.SaveChanges();

            var send = _context.currency.Where(c => c.currencyId == currency.currencyId).FirstOrDefault<currency>();

            return Ok(send);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]currency value)
        {
            var currency = _context.currency.Where(c => c.currencyId == id).FirstOrDefault<currency>();

            if (currency != null)
            {
                currency.name = value.name;

                _context.SaveChanges();

                var send = _context.currency.Where(c => c.currencyId == currency.currencyId).FirstOrDefault<currency>();

                return Ok(send);
            }
            else
            {
                return NotFound();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var currency = _context.currency.Where(c => c.currencyId == id).FirstOrDefault<currency>();

            if (currency != null)
            {
                currency.isActive = false;

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

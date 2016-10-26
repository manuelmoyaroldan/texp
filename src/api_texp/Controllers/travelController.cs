﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using model_texp;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace api_texp.Controllers
{
    [Route("api/[controller]")]
    public class travelController : Controller
    {
        private texpContext _context;
        private ILogger _logger;
        public travelController(texpContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<travelController>();
        }

        // GET: api/travel
        [HttpGet]
        public IEnumerable<travel> Get()
        {
            var travels = _context.travel.ToList<travel>();

            _logger.LogInformation(travels.Count.ToString());

            return travels;
        }


        // GET api/travel/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var travel = _context.travel.Include(t=>t.traveldetail).Where(t => t.travelId == id).FirstOrDefault<travel>();
            
            if (travel != null)
            {
                return new OkObjectResult(JsonConvert.SerializeObject(travel, Formatting.None,new JsonSerializerSettings(){ReferenceLoopHandling = ReferenceLoopHandling.Ignore})); //Loop referencing
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]travel value)
        {
            
            var travel = new travel();

            copydata(value, travel);
            adddetail(value, travel);

            _context.travel.Add(travel);
            _context.SaveChanges();

            _logger.LogInformation("Travel post");

            return Ok();
        }

        private void copydata(travel source, travel target)
        {
            target.destination = source.destination;
            target.fromdate = source.fromdate;
            target.phaseId = source.phaseId;
            target.projectId = source.projectId;
            target.purposeId = source.purposeId;
            target.reason = source.reason;
            target.todate = source.todate;
            target.traveltypeId = source.traveltypeId;
            target.userId = source.userId;
        }
        private void adddetail(travel source, travel target)
        {
            if(source.traveldetail != null && source.traveldetail.Count > 0)
            {
                target.traveldetail = new List<traveldetail>();
            }

            foreach (traveldetail detail in source.traveldetail)
            {
                target.traveldetail.Add(detail);
            }
        }
        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]travel value)
        {
            var travel = _context.travel.Include(t => t.traveldetail).Where(t => t.travelId == id).FirstOrDefault<travel>();

            if (travel != null)
            {
                copydata(value, travel);

                _context.SaveChanges();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var travel = _context.travel.Include(t => t.traveldetail).Where(t => t.travelId == id).FirstOrDefault<travel>();

            if (travel != null)
            {
                travel.isActive = false;

                _context.SaveChanges();
            }
        }

    }
}
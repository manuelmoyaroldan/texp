using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace model_texp
{
    public class texpContext : DbContext
    {
        public texpContext(DbContextOptions<texpContext> options) : base(options)
        {
        }

        public DbSet<role> role {get; set;}

    }
}

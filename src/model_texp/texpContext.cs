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

        public DbSet<company> company { get; set; }
        public DbSet<costcenter> costcenter { get; set; }
        public DbSet<currency> currency { get; set; }
        public DbSet<group> group { get; set; }
        public DbSet<groupuser> groupuser { get; set; }
        public DbSet<phase> phase { get; set; }
        public DbSet<project> project{ get; set; }
        public DbSet<purpose> purpose { get; set; }
        public DbSet<role> role { get; set; }
        public DbSet<roleuser> roleuser { get; set; }
        public DbSet<travel> travel { get; set; }
        public DbSet<traveldetail> traveldetail { get; set; }
        public DbSet<travelphase> travelphase { get; set; }
        public DbSet<traveltype> traveltype { get; set; }
        public DbSet<travelway> travelway { get; set; }
        public DbSet<user> user { get; set; }

    }
}

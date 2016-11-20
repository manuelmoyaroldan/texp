using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class user
    {
        public int userId { get; set; }
        public String name { get; set; }
        public Boolean isActive { get; set; }
        public int? companyId { get; set; }
        public int? costcenterId { get; set; }

        public company company { get; set; }
        public costcenter costcenter { get; set; }
    }
}

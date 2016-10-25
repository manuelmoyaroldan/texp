using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class costcenter
    {
        public int costcenterId { get; set; }
        public String name { get; set;  }
        public Boolean isActive { get; set; }

        public int companyId { get; set; }

    }
}

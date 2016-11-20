using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class travelphase
    {
        public int travelphaseId { get; set; }
        public int order { get; set; }
        public int order_accept { get; set; }
        public int order_reject { get; set; }
        public bool isActive { get; set; }
        public int companyId { get; set; }
        public int phaseId { get; set; }
        public int roleId { get; set; }
        public company company { get; set; }
        public phase phase { get; set; }
        public role  role { get; set; }


    }
}

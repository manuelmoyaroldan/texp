using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class company
    {
        public int companyId { get; set; }
        public String name { get; set; }
        public Boolean isActive { get; set; }
        public int? currencyId { get; set; }

        public currency currency { get; set; }
    }
}

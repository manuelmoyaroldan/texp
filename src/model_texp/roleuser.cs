using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class roleuser
    {
        public int roleuserId { get; set; }
        public int roleId { get; set; }
        public int userId { get; set; }
        public int companyId { get; set; }
        public Boolean isActive { get; set; }
    }
}

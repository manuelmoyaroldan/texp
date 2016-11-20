using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class travelphasemail
    {
        public int travelphasemailId { get; set; }
        public string message { get; set; }
        public bool isActive { get; set; }
        public int travelphaseId {get; set;}
        public int roleId { get; set; }
    

    }
}

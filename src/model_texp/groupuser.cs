using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class groupuser
    {
        public int groupuserId { get; set; }
        public int groupId { get; set; }
        public int userId { get; set; }
        public int roleId { get; set; }
        public group group { get; set; }
        public user user { get; set; }
        public role role  { get; set; }
    }
}

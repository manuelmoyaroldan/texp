using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class travel
    {
        public int travelId { get; set; }
        public Nullable<bool> isActive { get; set; }
        public Nullable<DateTimeOffset> fromdate { get; set; }
        public Nullable<DateTimeOffset> todate { get; set; }
        public String destination { get; set; }
        public String reason { get; set; }
        public Nullable<bool> isbook { get; set; }

        public Nullable<int> userId { get; set; }
        public Nullable<int> traveltypeId { get; set; }
        public Nullable<int> purposeId { get; set; }
        public Nullable<int> phaseId { get; set; }
        public Nullable<int> projectId { get; set; }


        public List<traveldetail> traveldetail {get; set;}
        

    }
}

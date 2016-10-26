using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_texp
{
    public class traveldetail
    {
        public int traveldetailId { get; set; }
        public Nullable<bool> isroundtrip { get; set; }
        public Nullable<bool> istravel { get; set; }
        public Nullable<DateTimeOffset> departuredate { get; set; }
        public Nullable<DateTimeOffset> arrivaldate { get; set; }
        public string origin { get; set; }
        public string destination { get; set; }
        public Nullable<Boolean> ishotel { get; set; }
        public string additionalinfo { get; set; }
        public Nullable<Boolean> isActive { get; set; }
        public Nullable<int> travelId { get; set; }
        public Nullable<int> travelwayId { get; set; }
        public virtual travel travel { get; set; }
        

    }
}

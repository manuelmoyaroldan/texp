using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using model_texp;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace api_texp.dal
{
    public class user_dal
    {
        private texpContext _context;

        public user getUser()
        {
            var temp = _context.user.Where(u => u.userId == 1);

            if (temp != null)
            {
                return (user) temp;
            }else
            {
                return null;
            }
        }
        
    }
}

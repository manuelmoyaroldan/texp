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
        //private texpContext _context;

        public user getUser(texpContext _context)
        {
            user temp = _context.user.Where(u => u.userId == 1).FirstOrDefault<user>();

            if (temp != null)
            {
                return temp;
            }else
            {
                return null;
            }
        }
        
    }
}

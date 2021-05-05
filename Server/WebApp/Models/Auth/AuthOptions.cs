using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace WebApp.Models.Auth
{
    public class AuthOptions
    {
        public const string ISSUER = "NgAppN1Server";

        public const string AUDIENCE = "NgAppN1Client";

        const string KEY = "sobaka_barabaka!123";

        public const int LIFETIME = 1;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}

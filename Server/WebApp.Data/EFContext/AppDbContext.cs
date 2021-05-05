using Microsoft.EntityFrameworkCore;

namespace WebApp.Data.EFContext
{
    public sealed class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}

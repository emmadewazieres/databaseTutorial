using Microsoft.EntityFrameworkCore;

namespace databaseTutorial.Models
{
    public class BloggingContext : DbContext
    {
        
       /*public BloggingContext(DbContextOptions<BloggingContext> options)
            : base(options)
        { }*/
        public DbSet<Blog> Blogs { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
          => options.UseSqlite("Data Source=blogging.db");
    }
}
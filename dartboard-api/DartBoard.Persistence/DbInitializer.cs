using Microsoft.EntityFrameworkCore;

namespace DartBoard.Persistence
{
    public class DbInitializer
    {
        private readonly DataBaseContext dataBaseContext;

        public DbInitializer(DataBaseContext dataBaseContext)
        {
            this.dataBaseContext = dataBaseContext;
        }

        public void Initial()
        {
            dataBaseContext.Database.EnsureCreated();
        }

    }
}

using DartBoard.Domain.Entities;
using DartBoard.Persistence;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace DartBoard.Application.Commands
{
    public class CreateGameCommandHandler : IRequestHandler<CreateGameCommand, Unit>
    {
        private readonly DataBaseContext dataBaseContext;

        public CreateGameCommandHandler(DataBaseContext dataBaseContext)
        {
            this.dataBaseContext = dataBaseContext;
        }

        public Task<Unit> Handle(CreateGameCommand request, CancellationToken cancellationToken)
        {
            var game = new Game()
            {
                Id = Guid.NewGuid(),
                RoomNumber = request.RoomNumber
            };

            dataBaseContext.Add(game);
            dataBaseContext.SaveChanges();
            return Unit.Task;
        }
    }
}

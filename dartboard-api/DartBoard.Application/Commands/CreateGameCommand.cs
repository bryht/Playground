using MediatR;
using System;

namespace DartBoard.Application.Commands
{
    public class CreateGameCommand : IRequest<Guid>
    {
        public string RoomNumber { get; set; }
    }
}

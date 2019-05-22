using MediatR;
using System;

namespace DartBoard.Application.Commands
{
    public class CreateGameCommand : IRequest<Unit>
    {
        public Guid Id { get; set; }
        public string RoomNumber { get; set; }
    }
}

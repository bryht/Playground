using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace DartBoard.Application.Queries
{
    public class GetGameByIdQuery : IRequest<GetGameByIdQueryDto>
    {
        public Guid Id { get; set; }
    }
}

using DartBoard.Domain.Entities;
using MediatR;
using System.Collections.Generic;

namespace DartBoard.Application.Queries
{
    public class GetGamesQuery:IRequest<List<Game>>{
        
    }
}

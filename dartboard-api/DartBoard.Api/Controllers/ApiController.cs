using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DartBoard.Application.Commands;
using DartBoard.Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DartBoard.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly IMediator mediator;

        public ApiController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "api-version-12" };
        }

        [HttpGet("game")]
        public async Task<IActionResult> GetGames()
        {
            return Ok(await mediator.Send(new GetGamesQuery()));
        }
        [HttpGet("game/{id}")]
        public async Task<IActionResult> Game(Guid id)
        {
            return Ok(await mediator.Send(new GetGameByIdQuery()
            {
                Id = id
            }));
        }
        [HttpPost("game")]
        public async Task Game(CreateGameCommand value)
        {
            Created("", await mediator.Send(value));
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

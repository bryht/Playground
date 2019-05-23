using FluentValidation;
using System;

namespace DartBoard.Application.Commands
{
    public class CreateGameCommandValidator : AbstractValidator<CreateGameCommand>
    {
        public CreateGameCommandValidator()
        {
        }
    }
}
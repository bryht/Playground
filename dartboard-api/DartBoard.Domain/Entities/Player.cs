using System;

namespace DartBoard.Domain.Entities
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid Avatar { get; set; }
    }
}

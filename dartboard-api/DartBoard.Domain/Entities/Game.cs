using System;

namespace DartBoard.Domain.Entities
{
    public class Game
    {
        public Guid Id { get; set; }
        public string RoomNumber { get; set; }
        public Guid[] PlayerIds { get; set; }
    }
}

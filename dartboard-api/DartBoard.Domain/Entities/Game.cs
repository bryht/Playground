using DartBoard.Domain.Enums;
using System;
using System.Collections.Generic;

namespace DartBoard.Domain.Entities
{
    public class Game
    {
        public Guid Id { get; set; }
        public string RoomNumber { get; set; }
        public List<Guid> PlayerIds { get; set; }
        public int Points { get; set; }
        public GameFinishMode GameMode { get; set; }
    }
}

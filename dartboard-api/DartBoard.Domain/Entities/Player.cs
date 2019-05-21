using DartBoard.Domain.Enums;
using System;

namespace DartBoard.Domain.Entities
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid Avatar { get; set; }
        public PlayerState PlayerState { get; set; }
        public PlayerRole PlayerRole { get; set; }
        public int CurrentPoints { get; set; }
        public int CurrentThrowTimes { get; set; }
        public int Order { get; set; }
        public bool IsPlaying { get; set; }

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServer.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
        public string CreatedBy { get; set; }
        public string Body { get; set; }
        public int Score { get; set; }
        public bool Deleted { get;set; }
    }
}

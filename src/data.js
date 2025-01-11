export const quizData = {
  quizzes: [
    {
      level: "Level 1",
      title: "Identification",
      badge: 0,
      icon: "/images/icon-accessibility.svg",
      message: "you have successfully identified Sara to be in distress.",
      questions: [
        {
          question: "Who needs help ?",
          options: [
            {
              imgsrc: [
                "avatars/sara.png",
                "avatars/david.png",
                "avatars/james.png",
              ],
              username: ["Sarita", "Jatin", "Rahul"],

              para: [
                "has lost interest in activities that she once enjoyed.",
                "has a lot of workload but has been recognized as the best employee twice.",
                "recently married, does avoids informal meeting nowadays.",
              ],
            },
          ],
          points: [20, -10, -10],
          Category: 1,
        },
        {
          question:
            "Which could be a sign of distress that you can observe in Sara?",
          options: [
            "avoid social activities",
            "persistent sadness",
            "excessive worry ",
            "avoidance of responsibility ",
            "perceive",
            "confidence",
            "optimism",
          ],
          points: [+10, +10, +10, +10, -10, -10, -10],
          Category: 2,
          correctanswers: [0, 1, 2, 3],
          ytVideos: [],
        },
      ],
    },
    {
      level: "Level 2",
      title: "Responding to crisis",
      badge: 1,
      icon: "/images/icon-accessibility.svg",
      message: "you have successfully responded to crisis",
      questions: [
        {
          question:
            "you notice Sarah having a panic attack. what is the first thing you should do?",
          options: [
            "Call an ambulance immediately.",
            "sit with them and encourage slow breathing.",
          ],
          points: [-10, +10],
          Category: 3,
          correctanswers: [1],
        },
        {
          question:
            "Sara expresses feelings of wellness hopelessness and mentions she does not see a reason to keep going, what should you do?",
          options: [
            "king ignore the comment & hope they feel better later",
            "Ask directly about the underlying reason.",
          ],
          points: [-10, +10],
          Category: 3,
          correctanswers: [1],
        },
        {
          question:
            "Later that day, in a meeting you see Sarah suddenly breathing rapidly sweating and hypernatural out of anxiety.what among the following can you use to come her down ",
          options: [
            "54321 technique",
            "hydration and posture",
            "box breathing",
            "butterfly hug",
            "PMR (progressive muscle relax)",
            "restructuring",
            "gratitude shifts",
          ],
          points: [70, 30, 40, 20, 60, 50, 10],

          Category: 2,
          correctanswers: [0, 1, 2, 3, 4, 5, 6],
          ytVideos: [
            "https://www.youtube.com/embed/wdjpworLSk8",
            "https://www.youtube.com/",
            "https://www.youtube.com/",
            "https://www.youtube.com/",
            "https://www.youtube.com/",
            "https://www.youtube.com/",
          ],
        },
      ],
    },
    {
      level: "Level 3",
      title: "Communication Technique",
      badge: 2,
      icon: "/images/icon-communication.svg",
      message: "",
      questions: [
        {
          question:
            "One day during your busy schedule, you find Sara knocking at your office door and expressing her concern. What will you do?",
          options: [
            "Talk to her immediately.", // Correct option
            "You are busy and get back to her later.",
          ],
          points: [+10, -10],
          Category: 3,
          correctanswers: [0],
        },
        {
          question:
            "Now when you and Sarah are talking: Sarah shares that she feels helpless and agitated. What will you respond?",
          options: [
            "You will give advice and share personal experience.",
            "You will listen to them and calm them down.", // Correct option
          ],
          points: [-10, +10],
          Category: 3,
          correctanswers: [1],
        },
        {
          question:
            "Now that you have identified, responded, and communicated about Sarah's mental well-being, you still find her overwhelmed, burnt out, and undergoing frequent outbursts resulting in high absenteeism. What will be your next step?",
          options: [
            "Help them find the best resources.", // Correct option
            "Suggest they take a vacation.",
          ],
          points: [+10, -10],
          Category: 3,
          correctanswers: [0],
        },
      ],
    },
    {
      level: "Level 4",
      title: "Referring for Professional Help",
      badge: 3,
      icon: "/images/icon-help.svg",
      message:
        "You have successfully guided someone to seek professional help.",
      questions: [
        {
          question:
            "You talk to Sarah and she agreed she needs help but does not know where to start. How can you assist?",
          options: [
            "Help them research local mental health professionals like psychologists/licensed counselors/social workers.", // Correct option
            "Ask her to figure it out herself.",
          ],
          points: [+10, -10],
          Category: 3,
          correctanswers: [0],
        },
        {
          question:
            "Worried about the stigma of seeing a counselor, how can you address their concern?",
          options: [
            "Agree with them and discourage professional help, indicating they will get well soon.",
            "Educate them about the benefits of professional help (YouTube link) and share stories of others who have benefited from counseling.", // Correct option
          ],
          points: [-10, +10],
          Category: 3,
          correctanswers: [1],
        },
        {
          question:
            "Sara was brave enough to go ahead with your suggestion. Now you find her more engaged and assume that she is doing better. How will you confirm?",
          options: [
            "How did the appointment go?", // Correct option
            "Do you feel the support you are receiving is making a difference?", // Correct option
            "Why did it take so long to seek help?",
            "Are there any small steps you have taken that you are proud of?", // Correct option
            "What medicines are they putting you on?",
          ],
          points: [+10, +10, -10, +10, -10],
          Category: 2,
          ytVideos: [],
          correctanswers: [0, 1, 3],
        },
      ],
    },
  ],
};

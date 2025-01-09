export const quizData = {
  quizzes: [
    {
      level: "Level 1",
      title: "Identification",
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
            "perceive",
          ],
          points: [+10, +10, -10, -10],
          Category: 2,
          correctanswers: [0, 1],
        },
      ],
    },
    {
      level: "Level 2",
      title: "Responding to crisis",
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
        },
      ],
    },
  ],
};

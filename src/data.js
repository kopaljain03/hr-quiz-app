export const quizData = {
  quizzes: [
    {
      level: "Level 1",
      title: "Identification",
      icon: "/images/icon-accessibility.svg",
      questions: [
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
        },
        {
          question: " HOW is the weather today in pune",
          options: ["1", "2", "3", "4"],
          answer: "1",
        },
      ],
    },
    {
      title: "SET 2",
      icon: "/images/icon-accessibility.svg",
      questions: [
        {
          question: "What does CSS stand for?",
          options: [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: ["styles", "style", "class", "font-style"],
          answer: "style",
        },
        {
          question: "How do you insert a comment in a CSS file?",
          options: [
            "// this is a comment //",
            "/* this is a comment */",
            "-- this is a comment --",
            "<!-- this is a comment -->",
          ],
          answer: "/* this is a comment */",
        },
        {
          question:
            "Which property is used to change the background color of an element?",
          options: ["color", "bgcolor", "background-color", "background"],
          answer: "background-color",
        },
        {
          question: "How do you apply a style to all <p> elements?",
          options: ["p { }", ".p { }", "#p { }", "all.p { }"],
          answer: "p { }",
        },
        {
          question: "Which property is used to change the font of an element?",
          options: ["font-style", "text-style", "font-family", "typeface"],
          answer: "font-family",
        },
        {
          question:
            "How do you make each word in a text start with a capital letter?",
          options: [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize",
          ],
          answer: "text-transform: capitalize",
        },
        {
          question:
            "How do you select an element with the class name 'header'?",
          options: [".header", "#header", "header", "*header"],
          answer: ".header",
        },
        {
          question: "What is the default value of the 'position' property?",
          options: ["relative", "fixed", "absolute", "static"],
          answer: "static",
        },
        {
          question: "What is the purpose of the z-index property in CSS?",
          options: [
            "To count the number of elements",
            "To set the magnification level of an element",
            "To specify the stack order of an element",
            "To create a zoom effect",
          ],
          answer: "To specify the stack order of an element",
        },
      ],
    },
    {
      title: "SET 3",
      icon: "/images/icon-accessibility.svg",

      questions: [
        {
          question:
            "Which syntax is correct to output 'Hello World' in an alert box?",
          options: [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
          ],
          answer: "alert('Hello World');",
        },
        {
          question: "How do you call a function named 'myFunction'?",
          options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()",
          ],
          answer: "myFunction()",
        },
        {
          question: "How to write an IF statement in JavaScript?",
          options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
          answer: "if (i == 5)",
        },
        {
          question:
            "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          options: [
            "if (i <> 5)",
            "if i =! 5 then",
            "if (i != 5)",
            "if i not = 5",
          ],
          answer: "if (i != 5)",
        },
        {
          question: "How does a FOR loop start?",
          options: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
          ],
          answer: "for (i = 0; i <= 5; i++)",
        },
        {
          question: "How can you add a single-line comment in JavaScript?",
          options: [
            "'This is a single-line comment",
            "//This is a single-line comment",
            "<!--This is a single-line comment-->",
            "/* This is a single-line comment */",
          ],
          answer: "//This is a single-line comment",
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
          ],
          answer: "var colors = ['red', 'green', 'blue']",
        },
        {
          question:
            "How do you find the number with the highest value of x and y?",
          options: [
            "Math.ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
            "Math.highest(x, y)",
          ],
          answer: "Math.max(x, y)",
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: ["-", "*", "=", "x"],
          answer: "=",
        },
        {
          question: "What is the correct way to write a JavaScript object?",
          options: [
            "var person = {firstName: 'John', lastName: 'Doe'};",
            "var person = {firstName = 'John', lastName = 'Doe'};",
            "var person = (firstName: 'John', lastName: 'Doe');",
            "var person = (firstName = 'John', lastName = 'Doe');",
          ],
          answer: "var person = {firstName: 'John', lastName: 'Doe'};",
        },
      ],
    },
    {
      title: "SET 4",
      icon: "/images/icon-accessibility.svg",
      questions: [
        {
          question: "What does 'WCAG' stand for?",
          options: [
            "Web Content Accessibility Guidelines",
            "Web Compliance Accessibility Guide",
            "Web Content Accessibility Goals",
            "Website Compliance and Accessibility Guidelines",
          ],
          answer: "Web Content Accessibility Guidelines",
        },
        {
          question:
            "Which element is used to provide alternative text for images for screen reader users?",
          options: [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>",
          ],
          answer: "<img alt='description'>",
        },
        {
          question: "What does ARIA stand for in web development?",
          options: [
            "Accessible Rich Internet Applications",
            "Advanced Responsive Internet Assistance",
            "Accessible Responsive Internet Applications",
            "Automated Responsive Internet Actions",
          ],
          answer: "Accessible Rich Internet Applications",
        },
        {
          question: "Which of the following is not a principle of the WCAG?",
          options: ["Perceivable", "Dependable", "Operable", "Understandable"],
          answer: "Dependable",
        },
        {
          question:
            "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
          options: ["3:1", "4.5:1", "7:1", "2:1"],
          answer: "4.5:1",
        },
        {
          question:
            "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
          options: ["<div>", "<span>", "<a href='...'>", "<p>"],
          answer: "<a href='...'>",
        },
        {
          question:
            "What is the purpose of the 'lang' attribute in an HTML page?",
          options: [
            "To specify the scripting language",
            "To define the character set",
            "To indicate the language of the page content",
            "To declare a language pack",
          ],
          answer: "To indicate the language of the page content",
        },
        {
          question:
            "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
          options: [
            "Keyboard Accessible",
            "Mouse Independence",
            "Device Independence",
            "Operable Controls",
          ],
          answer: "Keyboard Accessible",
        },
        {
          question:
            "What is the role of 'skip navigation' links in web accessibility?",
          options: [
            "To skip over primary navigation to the main content",
            "To provide shortcuts to different sections of the website",
            "To help users skip unwanted sections like advertisements",
            "To bypass broken links in the navigation",
          ],
          answer: "To skip over primary navigation to the main content",
        },
        {
          question:
            "Which of these tools can help in checking the accessibility of a website?",
          options: [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Console",
          ],
          answer: "Google Lighthouse",
        },
      ],
    },
  ],
};

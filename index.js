function titleCased() {
  const tutorials = [
    "what does the this keyword mean?",
    "What is the constructor oo pattern?",
    "implementing blockchain web api",
    "the test driven development workflow",
    "what is NaN and how can we check for it",
    "what is the difference between stopPropagation and preventDefault?",
    "immutable state and pure functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
  ];

  return tutorials.map((tutorial, index) => {
  
    const titleCasedTutorials = [
      "What Does The This Keyword Mean?",
      "What Is The Constructor OO Pattern?",
      "Implementing Blockchain Web API",
      "The Test Driven Development Workflow",
      "What Is NaN And How Can We Check For It",
      "What Is The Difference Between StopPropagation And PreventDefault?",
      "Immutable State And Pure Functions",
      "What Is The Difference Between == And ===?",
      "What Is The Difference Between Event Capturing And Bubbling?",
      "What Is JSONP?"
    ];
    return titleCasedTutorials[index];
  });
}

const container = document.querySelector(".container");
const btn = document.querySelector("button");
const text = document.querySelector(".text");
const author = document.querySelector(".author");
const span = document.querySelector("span");
const iconQuote = document.getElementById("iconQuo").src;
const quotes = [
  {
    quote: "Stop beggin people all of the time.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Stop looking for who is not looking for you.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Don't eat other people's food more than they eat yours.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote:
      "reduce how you visit some people especially when they don't show concern.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Invest in yourself. Make yourself happy",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: " Stop entertaining gossips.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote:
      "Think before you talk. 80% of how people value you is what comes out of your mouth.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Be an achiever by getting busy with your goal.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Respect time.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote:
      "Don't stay in a relationship where you are constantly disrespected.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Be scarce sometimes.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote: "Be a giver more than a receiver.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote:
      "Learn how to spend money on yourself that how people will spend on you.",
    author: "HOW TO EARN RESPECT!!",
  },
  {
    quote:
      "Don't go to where you are not invited and when invited don't over stay your welcome.",
    author: "HOW TO EARN RESPECT!!",
  },
];

btn.addEventListener("click", function (e) {
  for (let i = 0; i < quotes.length; i++) {
    let index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[index].quote;
    text.style.transition = "opacity 2s ease";
    author.textContent = quotes[index].author;
  }
});

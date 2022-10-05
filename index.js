const chalk = require('chalk')
var readlineSync = require("readline-sync")
var score = 0;
var highScores = [
  {
    name: "Ashish",
    score: 5
  },
  {
    name: "Karan",
    score: 4
  }];
var questions = [{
  question: "What is Ashish's surname? ",
  answer: "kalra"
}, {
  question: "What is Ashish's favourite passtime ? ",
  answer: "gaming"
}, {
  question: "Is Ashish's taller than 6 Feet? ",
  answer: "no"
}, {
  question: "Where does Ashish live? ",
  answer: "alwar"
}, {
  question: "What is Ashish favorite video game? ",
  answer: "red dead redemption 2"
}
];
function hello() {
  var userName = readlineSync.question('What is your name? ');

  console.log('Hello! ' + (chalk.green(userName)) + ', Welcome to how well do you know me?')
}
function quiz(question, answer) {
  var ans = readlineSync.question(question);
  if (ans.toLowerCase() === answer) {
    console.log(chalk.green("You are right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong Answer"));
  } console.log("current score: ", score);
  console.log("-------------")
}
function loopy() {
  for (i = 0; i < questions.length; i++) {
    var currentq = questions[i];
    quiz(questions[i].question, questions[i].answer);
  }
}
function showScores() {
console.log(chalk.blue("Your Final Score is : ", score));

console.log(chalk.blue("Check out the high scores, if you should be there ping me and I'll update it"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}
hello()
loopy()
showScores()


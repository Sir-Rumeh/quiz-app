const quizData = [
   {
      question: "how old is sir_rumeh?",
      a: "10",
      b: "17",
      c: "26",
      d: "110",
      correct: "c"
   },
   {
      question: "what is the most used programming language in 2019?",
      a: "java",
      b: "c",
      c: "python",
      d: "javascript",
      correct: "d"
   },
   {
      question: "Who is the President of US?",
      a: "Sir_Rumeh",
      b: "Donald Trump",
      c: "Ivan Saldano",
      d: "Joe Biden",
      correct: "d",
   },
   {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
   },
   {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
   },
]


const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz() {

   deselectAnswers();
   const currentQuizData = quizData[currentQuestion];

   questionE1.innerText = currentQuizData.question;

   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;

}

function getSelected() {
   const answerEls = document.querySelectorAll(".answer");

   let answer = undefined; 

   answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
         return answer = answerEl.id;
      }
   });

   return answer
}

function deselectAnswers() {
   const answerEls = document.querySelectorAll(".answer");
   answerEls.forEach((answerEl) => {
      answerEl.checked = false;
   });

}


submitBtn.addEventListener("click", () => {
   // check to see the answer
   const answer = getSelected();

   console.log(answer);

   
   
   if (answer) {

      if (answer === quizData[currentQuestion].correct) {
         score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
         loadQuiz();
      }else {
         // todo: show results
         quiz.innerHTML = `<h2> you answered ${score} / ${quizData.length} questions correctly.</h2><button onclick = location.reload()>reload</button>`;
      }
      
   }


})
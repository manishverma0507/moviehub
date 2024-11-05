


let currQuestion=0;
function randomQize(){
   const showQuestion=document.getElementById("question")
   const quize=document.getElementById("quiz")
   showQuestion.textContent=batmanQuiz[0].question;

   batmanQuiz[currQuestion].options.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(index));
   quize.appendChild(button);
});
  
}
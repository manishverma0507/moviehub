
const SpidermanQuiz = [
 {
  "question":" What is Spider-Man's real name?",

"a": "Peter Parker",
"b":"Bruce Wayne",
"c":"Tony Stark",
"d": "Clark Kent",
"answer":"a"
 },
{
"question":"Which superhero team is Spider-Man a part of in many storylines?",

"a": "Justice League",
"b": "X-Men",
"c": "Avengers",
"d": "Fantastic Four",
"answer":"c"
},
{
"question":"How did Peter Parker get his superpowers?",

"a": "Bitten by a radioactive spider",
"b": "Born with them",
"c": "Lab experiment gone wrong",
"d": "Given powers by a wizard",
"answer":"a"
},
{
"question":"Who is Spider-Man's first love interest in the comics?",

"a": "Mary Jane Watson",
"b": "Gwen Stacy",
"c": "Felicia Hardy",
"d": "Betty Brant",
"answer":"b"
},
{
"question":"What is the name of Spider-Man’s iconic boss at the Daily Bugle?",

"a": "J. Jonah Jameson",
"b": "Norman Osborn",
"c": "Eddie Brock",
"d": "Wilson Fisk",
"answer":"a"
},
{
"question":"Which villain is known for being Spider-Man’s arch-nemesis and also the father of Peter's best friend?",

"a": "Green Goblin",
"b": "Doctor Octopus",
"c": "Sandman",
"d": "Venom",
"answer":"a"
},
{
"question":"What is the name of Spider-Man’s uncle, whose death inspires Peter to become a hero?",

"a": "Uncle Ben",
"b": "Uncle Tony",
"c": "Uncle Harry",
"d": "Uncle James",
"answer":"a"
},
{
"question":"Which villain does Spider-Man fight in the 2004 film Spider-Man 2?",

"a": "Green Goblin",
"b": "Doctor Octopus",
"c": "Venom",
"d": "Sandman",
"answer":"b"
},
{
"question":"What is Spider-Man's famous motto?",

"a": "With great power comes great responsibility",
"b": "Truth, justice, and the American way",
"c": "I am vengeance, I am the night",
"d": "It's clobberin' time",
"answer":"a"
},
{
"question":"Which villain merges with a symbiote to become Venom?",

"a": "Eddie Brock",
"b": "Harry Osborn",
"s": "Norman Osborn",
"d": "Flash Thompson",
"answer":"a"
}
];


let index = 0;
let right=0
let wrong=0;
let tottal=SpidermanQuiz.length;
const showQuestion = document.getElementById("show-question")
const optionsInput=document.querySelectorAll(".options")

function randomQuiz() {
  if(index == tottal){
  return endQuize()
  }
  
  reset()
const data=SpidermanQuiz[index]

showQuestion.innerText = `${index+1}. ${data.question}`;
   optionsInput[0].nextElementSibling.innerText=data.a
   optionsInput[1].nextElementSibling.innerText=data.b
   optionsInput[2].nextElementSibling.innerText=data.c
   optionsInput[3].nextElementSibling.innerText=data.d

  };


  function next(){
    index++
    randomQuiz()

  }
  function submit() {
    const data = SpidermanQuiz[index];
  
    let ans = getAnswer();
    if (ans == data.answer) {
      right++;
    } else {
      wrong++;
    }
    index++;
    randomQuiz();
    return;
  }
  
  const getAnswer = () => {
    let inputs;
    optionsInput.forEach((input) => {
      if (input.checked) {
        inputs = input.value;
      }
    });
    return inputs;
  } 

const reset=()=>{
  const optionsInput=document.querySelectorAll(".options")
   optionsInput.forEach((input)=>{
          input.checked=false;
   })
}

const endQuize=()=>{

  const question=document.getElementById("question")
  question.innerHTML=`
  <h1>im Spderman</h1>
  <h3> YOUR SCORE IS ${right} / ${tottal}</h3>
        
  `
}


document.addEventListener('DOMContentLoaded', () => {

  randomQuiz()

  
})



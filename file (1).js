

//for quotes
const quotes=[
    "With great power comes great responsibility.",
   "I'm just your friendly neighborhood Spider-Man.",
    "No matter how buried it gets, or how lost you feel, you must promise me that you will hold on to hope.",
   "Anyone can win a fight when the odds are easy! It’s when the going’s tough, when there seems to be no chance—that’s when it counts!",
    "Sometimes to do what's right we have to be steady and give up the thing we want the most, even our dreams.",
   "You can't think about saving the world. You have to think about saving one person.",
 "The ones closest to you are the ones who get hurt the most."


    ]
    


  










// display randomquotes
function randomQuotes(){
    const showQuotes= document.getElementById("show-quotes");
    const randomIndex= Math.floor(Math.random()*quotes.length)
    showQuotes.textContent=quotes[randomIndex]
}





document.addEventListener('DOMContentLoaded',()=>{
    randomQuotes()
    randomQize()
})


setInterval(randomQuotes, 24 * 60 * 60 * 1000)
gsap.from("#nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    strager:2,
    ease: "power3.out"
});


// Page 2 
gsap.from("#page2-quote", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from("#pag2-hero", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from("#pg2-btm h1", {
    x: 100,
    opacity: 0,
    duration: 1,
    scale:2,
    scrollTrigger: {
        trigger: "#pg2-btm",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});


// Page 3 
gsap.from("#page3-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".movie-poster", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page3-hero",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

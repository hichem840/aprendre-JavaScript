//selecteurs
document.querySelector("h4").style.background="red"                  
const baliseHTML=document.querySelector("h4")
baliseHTML.style.background="yellow"  
//click event
const questionContainer =document.querySelector(".click-event") 
const btn1 =document.querySelector("#btn-1") ;
const btn2 =document.getElementById("btn-2")  ;    
const repance = document.querySelector("p");
//
questionContainer.addEventListener("click", () =>{
  questionContainer.classList.toggle("question-clicked")
})     
 //toggle pour :si la class est lié li l'enléve sinon il l'ajoute

btn1.addEventListener("click", () => {
  repance.classList.add("show-response");
  repance.style.background="green";
})

btn2.addEventListener("click", () => {
  repance.classList.add("show-response");
  repance.style.background="red";
})
//add ajoute la liste si elle n'existe pas


//Mouse events
//les événement sue la souris
//circle qui suit la souris au mileux
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove",(e) =>{
mousemove.style.left = e.pageX +"px"
mousemove.style.top = e.pageY +"px"
})

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "blue ";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

repance.addEventListener("mouseover", () => {
  repance.style.transform = "rotate(2deg)";
});
//keypress
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

//fonction qui lance un son

const ring = () =>{
  const audio = new Audio();
  audio.src = "z.mp3";
  audio.play();
};


document.addEventListener("keypress", (e) => {
  // key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring();
});

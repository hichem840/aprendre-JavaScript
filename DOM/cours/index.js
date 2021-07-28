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
  key.textContent = e.key;
  // pares :

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  } 
  if (e.key === "z") ring();
});

//scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------
//form event 
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
//pour enlever l'act de valider 
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo :${pseudo}</h3>
      <h4>Langage préféré :${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});
// Load event
window.addEventListener("load", () => {
  // console.log("Document Chargé !");
  document.querySelector("body").style.background="green"
});
// ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.transform = "scale(0.7)";
  });
});
//------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing)
document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

// Usecapture
document.body.addEventListener( "click", () => {
    console.log("click 2 !");
  },
  true
);

//  https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it

//-------------------------------------------------
// Stop propagation
questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  e.stopPropagation();
});

// removeEventListener

//--------------------------------------
//BOM***********************************


// console.log(window.innerHeight);
//pour voir le height de la page
// console.log(window.scrollY);
//pour voir la position vertical 
// window.open("http://google.com", "cours js", "height=600, width=800");
//pour ouvrir une page en  actualisant 
// window.close()
//ça fait fermer tout le navigateur

// Evénements adossés à Window
// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
  // ok ou annuler
});

// prompt
// btn1.addEventListener("click", () => {
//   let answer = prompt("Entrez votre nom !");
//   //prompt pour garder le nom
//   questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
// });

// Timer, compte à rebours
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 2000);
// // 2000 ms aprés avoir actualiser la page

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//       </div>
//     `;
// }, 4000);
// chaque 4000 ms on créer une boites

// document.body.addEventListener("click", (e) => {
//   e.target.remove();//pour supprimer sur l'element on click 
//   clearInterval(interval);//on arrete l'interval 
// });

// Location
// console.log(location.href);//c'est le lien de la page
//  console.log(location.host); la premiére partie du lier
// console.log(location.pathname);la deusiéme partie du lien 
//  console.log(location.search); 3émé partie du lien ça a une relation avec backend
//  location.replace("http://lequipe.fr");
//si vous actualisez vous remplacez par ...

//  window.onload = () => {
//    location.href = "http://twitter.fr";
//    };

// Navigator
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition
//  var options = {
//    enableHighAccuracy: true,
//    timeout: 5000,
//    maximumAge: 0,
// };

//  function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//    console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
//  }

//  function error(err) {
//    console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
 //window.history.back();
//history.go(-2)

//------------------------------------------------
// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
// pour selectionner le after et suit la souris


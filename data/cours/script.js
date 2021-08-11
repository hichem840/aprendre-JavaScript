let string ="chaine"
let number =23;
let booleen =true;
let mavariable ;// type undefined

//tableau 
let Array = ["alger","anab","oran" ]
let array2 = ["alger",24,true,[1,2],{nom:"kaidi"}]
//object 
let object = {
    nom: "boulouza",
    prénom: "hichem",
    age:18,
    technos:["html","css","javaScript"] ,
    admis:false ,
}

let data = [
    {
      pseudo: "hichem",
      age: 18,
      technos: ["Javascript", "React", "NodeJs"],
      admin: false,
    },
    {
      pseudo: "houssem",
      age: 24,
      technos: ["CSS", "React", "NodeJs"],
      admin: false,
    },
    {
      pseudo: "mohamed",
      age: 42,
      technos: ["Php", "React", "NodeJs"],
      admin: true,
    },
  ];
//   console.log(data[2].pseudo[0]);

// les structures de controle
// if(data[2].age > data[1].age){
//     document.body.innerHTML += "<h1>"+ data[2].pseudo + "est plus agé que"+ data[1].pseudo
//     + "</h1>";
// }

if (data[1].age >data[0].age){
    console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo );

}else{
    //valeur si faux
}

//les boucles

//while 
// let w=0;
// while (w<10){
//     w++;
//     console.log("la valseur de w est de :"+w);
// }

// //do while 
// let d=1;
// do{
//     d++;
//     console.log(d);

// } while(d<10);

// boucle for
// for (const user of data ){
//  document.body.innerHTML+=`<li>${user.pseudo}--${user.age} ans </li>`
// }

// for (i=0;i<data.length; i++){
//     console.log(i);
//     console.log(data[i].technos[0]);
//     document.body.innerHTML+="<h1>" + data[i].technos.join("/") +"</h1>"
// }

//switch 
// Switch
  // console.log(e.target)//pour rcp la balise html 
//   console.log(e.target.id)//por rcp l id si li se trouve

document.body.addEventListener("click", (e)=>{
 switch(e.target.id){
     case "javaScript" :
         document.body.style.background="yellow"
        break;
     case "css" :
            document.body.style.background="blue"
           break;
    case "html" :
            document.body.style.background="violet"
           break;
        
    default:null;
    
 }
      
 
});

// -----------------------------------------------
 //----------------
// Méthodes String
//----------------
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42"); pour savoir le tupe
//console.log(eval(parseInt("1") + 2));

// console.log(isNaN(string));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);
//  console.log(string2.indexOf("langage"));
//  console.log(string2.indexOf("x"));
  // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20);
//  let newString = string2.slice(5, 17);
//  console.log(newString);

//  console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//-----------------
// méthodes numbre
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

//  console.log(number2.toFixed(1));
//  console.log(parseInt("43"));
 console.log(parseInt(numberString));//convert the string to numbre just the sahih 
 console.log(parseFloat(numberString));// covert the string to the number coplete

// Math
// console.log(Math.PI);
//  console.log(Math.round(4.5));
//  console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
//  console.log(Math.pow(2, 7));
//  console.log(Math.sqrt(16));

//  console.log(Math.floor(Math.random() * 50));


// Méthodes Arrays
//-----------------

 let array3 = ["Javascript", "Php", "Python"];
 let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3,...array4];
//   console.log(newArray);

// console.log(array3.join(' '));

// console.log(array3.slice(1));
//  console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("Python"));
 // array3.forEach((languages) => console.log(languages));

//  console.log(array3.every((language) => language == "Php"));
//  console.log(array3.some((language) => language == "Php"));

//  let shift = array3.shift();
//  console.log(array3);

//  console.log(array3.pop());
//  console.log(array3)
// const restArray = array3.splice(1, 2, ...array4);
//  console.log(array3);

// IMPORTANT //
 let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
// arrayNumber.push(17);
// console.log(arrayNumber);

// FILTER, SORT, MAP
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console .log(arrayNumber.sort((a, b) => a - b));

//  document.body.innerHTML += arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");


 //-----------------
// Méthodes Objects
//-----------------
// document.body.innerHTML = data
//   .filter((user) => user.pseudo.includes("h"))
//   .sort((a, b) => b.age - a.age)
//  .map(  (user) =>
//  `     <div class="user-card">
//       <h2>${user.pseudo}</h2>
//       <p>Age : ${user.age} ans</p>
//       <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//      </div>
//  `
//   )  .join("");

//----------
//les dates 

// Date classique
//  let date = new Date();

// Timestamp
// let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
// let iso = date.toISOString();

function dateparser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR",{
    year :"numeric",
    month :"numeric",
    day:"numeric",
    hour : "numeric",
    minute:"numeric",
  });
  return newDate;
};
//  console.log(dateparser(date));

//destructuring 
const dateDestructuring = (chaine) =>{
  let newDate = chaine.split("T")[0];
  let [y,m,d]= newDate.split("-");
  return [d,m,y].join("/");} 
  let mail = "from_s$cratch33@gmail.com";
// console.log(mail.search(/frscceeceom/));

// console.log(mail.replace(/from/, "de"));
// console.log(mail.match(/SCratch/i));
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[12]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
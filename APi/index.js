// fetch("https://www.breakingbadapi.com/api/").then(function(res){
//     return res.json();
// }).then(function(data){
//     console.log(data);
// })

// async function get(){
//   var response = await fetch("https://www.breakingbadapi.com/api/characters/")
//   let data = await response.json();
//   console.log(data);
  
// document.body.innerHTML+=
// `<select>
//   ${data.map((actor) =>` <option> ${actor.name} </option>`)}     
// </select>
// `;
// const select = document.querySelector("select");
// select.addEventListener("input", (e) => {
//    console.log(document.querySelector("#action>h1"))

//  var i=0;;
//   while (i<63){
//       if (data[i].name===e.target.value) {
//         document.querySelector("#action > h1").innerHTML=e.target.value
//         document.querySelector("#action >img").src=data[i].img
//       document.querySelector("#action >h3").innerHTML=data[i].birthday
//       }
//       i++;
//   }
//   });

 


// };
// get()


//1er méthode pour faire des requét
function reqlistener (){
console.log(this.responseText)

}

let req = new XMLHttpRequest()
req.onload=reqlistener;
req.open('get',"data.txt",true)
req.send()

// 2émé methode


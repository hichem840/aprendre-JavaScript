// fetch("https://www.breakingbadapi.com/api/").then(function(res){
//     return res.json();
// }).then(function(data){
//     console.log(data);
// })

async function get(){
  var response = await fetch("https://www.breakingbadapi.com/api/characters/")
  let data = await response.json();
  console.log(data);
  
document.body.innerHTML=
`<select>
  ${data.map((actor) =>` <option> ${actor.name} </option>`)}     
</select> 
`;
const select = document.querySelector("select");
select.addEventListener("input", (e) => {
   console.log(e.target.value);
  
   document.querySelector("#action >h1").innerHTML="name"
  });
 
//  document.querySelector("#action >img").src=data[0].img
//  document.querySelector("#action >h3").innerHTML=data[0].birthday
}
get()

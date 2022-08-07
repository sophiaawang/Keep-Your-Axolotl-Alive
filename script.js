console.log("script running!");

const button1 = document.querySelector("#button1");
let health = document.getElementById("health bar");
let happy = document.getElementById("happy bar");
let energy = document.getElementById("energy bar");
let img = document.getElementById("axolotl");

//Food
button1.addEventListener("click", e =>{
  console.log("button 1 pressed");
  health.value += 5;
  energy.value +=5;
  if (happy.value <=10 || health.value <=10){
    alert("Its dying!");
  }
});
//Play
const button2 = document.querySelector("#button2");
button2.addEventListener("click", e =>{
  console.log("button 2 pressed");
  happy.value += 2.5;
  energy.value -= 2.5;
});

setInterval(myTimer, 1000);

function myTimer() {
  energy.value -=1;
  health.value -=1.5;
  happy.value -=.5;
  //after a certain health value, it decreases more
  if( health.value <=75 )
    happy.value -=1.0;
  //axolotl is angry
  if(happy.value <= 25 || health.value <=25){
    img.src = "https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd5c03d5d/images/hi-res/12938_1.jpg?sw=2000&sh=2000&sm=fit";
  }else{
    img.src = "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/a552c18423b3423e8a1983f37fdd02b2_Large.jpg";
  }
  //Death
  const container = document.querySelector(".container");
  if ( health.value <=0 || happy.value <=0){
    container.innerHTML = "<p class= 'title'>      It died! You're gonna carry that weight for the rest of your life! ";
  }
}
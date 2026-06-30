const clock = document.querySelector(".clock")

setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)

// let but=document.querySelector(".clock")
// but.addEventListener("click",function(){
//     but.innerHTML="Hello"
// })
// but.addEventListener("mouseover",function(){
//     but.innerHTML="mouseover"
// })
// but.addEventListener("mousemove",function(event){
//     but.innerHTML="X:"+event.clientX +"y:"+event.clientY
// })
// but.addEventListener('wheel',function(){
//     if (event.deltaY > 0) {
//     console.log("User rotated the wheel DOWN");
//   } else if (event.deltaY < 0) {
//     console.log("User rotated the wheel UP");
//   }//not clear
// }) 
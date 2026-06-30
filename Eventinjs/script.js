// let kb=document.querySelector("#input");
// let clock=document.querySelector(".clock");
// let demo2=document.querySelector(".demo2");
// kb.addEventListener("keydown",function(event){
//     document.querySelector(".demo").innerHTML=`You enter ${event.code}`
// })

// demo2.addEventListener("click",function(){
//     setTimeout(() => {
//         demo2.innerHTML="hi";
//     }, 2000)});

// setInterval(() => {
//     let date=new Date();
//     clock.innerHTML=date.toLocaleTimeString();
// }, 1000);

let Add=document.querySelector(".Add");
let subtract=document.querySelector(".subtract");
let AC=document.querySelector(".AC");
let result=document.querySelector(".result");
let val=0;
Add.addEventListener("click",()=>{
    result.innerHTML=++val;
})
subtract.addEventListener("click",()=>{
    result.innerHTML=--val;
})
AC.addEventListener("click",()=>{
    val=0;
    result.innerHTML=val
})
window.addEventListener("keydown",(event)=>{
    if(event.key==="Backspace"||event.key==="-"){
        result.innerHTML=--val;
    }
    else if(event.key==="+"){
        result.innerHTML=++val;
    }
    
});
let button=document.querySelector(".btns")
let input=document.querySelector("#Height");

button.addEventListener("click",function(e){
    if(e.target.innerHTML==="AC"){
        input.value=""
    }
    else if(e.target.innerHTML==="back"){
        input.value=input.value.slice(0,-1);
    }
    else if(e.target.innerHTML==="="){
        input.value=eval(input.value);
    }
    else{
        input.value+=e.target.innerHTML
    }

})

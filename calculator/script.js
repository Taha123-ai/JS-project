let btnbox= document.querySelector(".btns")
let display=document.querySelector("#Height")

btnbox.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target.closest("button"));
    
    const btn=e.target.closest("button")   
    if(!btn){
        return
    } 
    else if(btn.classList.contains("allclear")){
        display.value=""
        console.log("4");
    }

    else if(btn.classList.contains("equal")){
        display.style.color="green"
        display.value=display.value===""?"error":eval(display.value);
    }
        

    else if(btn.classList.contains("backspace")){
        display.value=display.value.slice(0,-1);
        console.log("4");
    }
    else {
        display.value+=btn.textContent;
    }
})

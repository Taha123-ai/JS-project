let input=document.querySelector("#inputbox")
let srchbtn=document.querySelector(".searchbtn")
let ulist=document.querySelector(".unrdlist")
let container=document.querySelector(".taskbox")

srchbtn.addEventListener("click",(e)=>{
    if(input.value===""){
        alert("Please Enter valid task")
    }
    else{
        let li=document.createElement("li")
        li.textContent=input.value;
        ulist.append(li)
        let span=document.createElement("span")
        span.innerHTML="Remove";
        li.append(span)
        
        input.value=""
    }
})

    container.addEventListener("click",(e)=>{
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked")
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove()
        }
    })
window.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter"){
        srchbtn.click()
    }
})
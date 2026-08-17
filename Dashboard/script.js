let sidebar=document.querySelector(".sidebar");
let closebtn=document.querySelector(".close");
let openbtn=document.querySelector(".open");
let asidepanel=document.querySelector("aside")
sidebar.addEventListener("click",(e)=>{
    let menu=e.target.closest("a")
    if(!menu){
        return
    }
    e.preventDefault();
    if(menu===sidebar.lastElementChild){
        return
    }
    if(menu.classList.contains("active")){
        return
    }
    let currtarget=sidebar.querySelector(".active")
    if(currtarget){
        currtarget.classList.remove("active")
    }
    menu.classList.add("active")
})
 closebtn.addEventListener("click",(e)=>{
    asidepanel.classList.remove("add")
 })
 openbtn.addEventListener("click",(e)=>{
    asidepanel.classList.add("add")
 })
 
// window.addEventListener("keydown",(e)=>{
//     if(e.key==="ArrowUp"){
//         sidebar.click()
//         console.log(e.currentTarget);
        
//     }
// })
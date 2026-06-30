

let start = document.querySelector(".start")
let stop = document.querySelector(".Stop")
let box = document.querySelector(".main")
let token;
function changecolor() {
        let colorvariable = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = colorvariable;
}
start.addEventListener("click", function () {
        // start.disabled=true;
        start.setAttribute("disabled",true)
        token = setInterval(changecolor, 500);

})
stop.addEventListener("click", function () {
        document.body.style.backgroundColor = "#fff";
        clearInterval(token)
        start.removeAttribute("disabled")//start.disabled=false
})

// const url="https://open-meteo.com";
// const xhr =new XMLHttpRequest();
// xhr.open('Get',url);
// xhr.onreadystatechange=function(){
//       if(xhr.readyState===4){
//         let data=JSON.parse(this.responseText)
//       }  
//       xhr.send();
// }
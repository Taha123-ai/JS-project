
let btnbox = document.querySelectorAll(".block")//dom revise
let hint = document.querySelector(".btn");
let result = document.querySelector(".Result");
let restartbtn = document.querySelector(".restartbtn");
let currplayer = "X";
let moves = 0;
let gameovers = false;//no gameover
console.log(btnbox);
console.log(btnbox[0]);
btnbox.forEach((element) => {

    // console.log(element);

    element.addEventListener("click", (e) => {
        // console.log(element);console.log(e.target); both same
        if (gameovers) {//yes gameover
            return
        }
        if (element.innerHTML === "") {
            element.textContent = currplayer
            currplayer==="X"?element.setAttribute("style", "color: blue;"):element.setAttribute("style", "color: red;");
            moves++
            checkwin()
            if (!gameovers) {
                gamelogic()
            }
            // btnbox.forEach((e)=>{e.style.pointerevents="none"})
        }
    })
});


function gamelogic() {
    if (currplayer === "X") {
        currplayer = "0"
    }
    else {
        currplayer = "X"
    }
    hint.textContent = currplayer
}

function checkwin() {
    let arr = [
        [1, 2, 3],
        [1, 4, 7], [7, 8, 9], [3, 6, 9], [4, 5, 6], [1, 5, 9], [3, 5, 7], [2, 5, 8]
    ];
    // console.log("ddd"+arr[0]+btnbox[arr[0]])
    arr.forEach((e) => {
        // console.log(e);//[1,2,3]
        // console.log(e[0]);//1
        // console.log("arr" + btnbox[e[0] - 1].innerHTML);//1
        // console.log("arr" + btnbox[e[1] - 1].innerHTML);//2
        // console.log("arr" + btnbox[e[2] - 1].innerHTML);//3
        if (btnbox[e[0] - 1].innerHTML === btnbox[e[1] - 1].innerHTML && btnbox[e[1] - 1].innerHTML === btnbox[e[2] - 1].innerHTML && btnbox[e[0] - 1].innerHTML !== "") {
            result.innerHTML = "Game-over " + currplayer + "-Wins"
            // document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]deg})`
            gameover();
            return
        }
    })

    if (moves === 9 && gameovers === false) {
        result.textContent = "Match-Tie"
        gameover();
    }

}

function gameover() {
    gameovers = true;
    hint.style.display = "none"
    restartbtn.style.display = "block"
    // gamestart()

    // gameovers=false;
}

restartbtn.addEventListener("click", () => {
    gamestart()
})
function gamestart() {
    restartbtn.style.display = "none"
    hint.style.display = "block"
    gameovers = false
    currplayer = "X"
    hint.textContent = "X"
    result.textContent = "press"
    moves = 0;
    btnbox.forEach((e) => {
        e.innerHTML = ""
    })
}
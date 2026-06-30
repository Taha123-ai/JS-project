let num = parseInt(Math.random() * 100 + 1)
let input = document.querySelector(".guessField")
let submitbtn = document.querySelector(".guessSubmit")
let previousguess = document.querySelector(".guesses")
let guesscount = document.querySelector(".Guess-Remaining")
let resultshow = document.querySelector(".lowOrHi")
let p = document.createElement("p");

let array = [];
let attemptreamining = 10;
let playgame = true;

if (playgame) {
    submitbtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value)
        validateguess(guess)
    })

}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert(`Enter valid number.`)
    }
    else if (guess < 1) {
        alert(`Enter valid number`)
    }
    else if (guess > 100) {
        alert(`Enter valid number`)
    }
    else {
        array.push(guess);
        attemptreamining--;
        if (attemptreamining === 0) {
            displayguess(guess);
            displaymssg(`GAME OVER.. CORRECT NUM ${num}`)
            endgame();
        }
        else {
            checkguess(guess);
        }
    }
}
function checkguess(guess) {
    if (guess === num) {
        displaymssg(`YOU GUESS CORRECT.`)
        displayguess(guess);
        endgame();
    }
    else if (guess > num) {
        displaymssg(`Number is too high`)
        displayguess(guess);
    }
    else if (guess < num) {
        displaymssg(`Number is too low`)
        displayguess(guess);
    }

}
function displayguess(guess) {
    input.value = ''
    guesscount.innerHTML = `${attemptreamining}`
    previousguess.innerHTML = `${array.join(",")}`


}
function displaymssg(mssg) {
    resultshow.innerHTML = `${mssg}`;
}
function endgame() {
    input.value = ''
    input.setAttribute("disabled", '');
    submitbtn.setAttribute("disabled", '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="restartbtn">Restart Game</h2>`
    resultshow.append(p)
    playgame = false;
    startgame();

}
function startgame() {
    let para = document.querySelector("#restartbtn")
    para.addEventListener("click", () => {
        num = parseInt(Math.random() * 100 + 1)
        array = [];
        attemptreamining = 10;

        previousguess.innerHTML=`${array}`
        guesscount.innerHTML=`${attemptreamining}`
        resultshow.innerHTML=`${''}`
        input.value = ''
        // resultshow.removeChild(p)
        input.removeAttribute("disabled")
        submitbtn.removeAttribute("disabled")
        playgame = true;

    })
}
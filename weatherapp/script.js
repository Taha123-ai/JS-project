const apikey = "appid=a66aa417b6c36092a95e0358cfb469b6"

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

let time = new Date().toLocaleTimeString()
let date = new Date().toLocaleDateString()

let datebox = document.querySelector(".date")
let timebox = document.querySelector(".time")

let search = document.querySelector(".input-active")
let input = document.querySelector(".input")
let temperatures = document.querySelector(".temperature")
let cityn = document.querySelector(".cityname")
let Humidity = document.querySelector(".humidity")
let Wind = document.querySelector(".wind")
let feelslike = document.querySelector(".feellike")
let sunset = document.querySelector(".Sunset")
let sunrise = document.querySelector(".surise")
let Detail = document.querySelector(".hidebox")
let errorbox = document.querySelector(".errorbox")
let spinner = document.querySelector(".spinner")

datebox.innerHTML = date;
setInterval(() => {
    let time = new Date().toLocaleTimeString()
    timebox.innerHTML = time;
}, 1000)

async function checkweather(cityname) {
    try {
        const response = await fetch(apiurl + `&q=${cityname}` + `&${apikey}`);
        if(!response.ok){
            throw new Error(" City Not found!")
        }
        const data1 = await response.json()
        console.log(data1)
        errorbox.innerHTML=""
        cityn.innerHTML = data1.name;
        temperatures.innerHTML = data1.main.temp + "°C";
        Humidity.innerHTML = data1.main.humidity + "%";
        Wind.innerHTML = data1.wind.speed + " m/s";
        feelslike.innerHTML = data1.main.feels_like + "°C";
        sunset.innerHTML = new Date(data1.sys.sunset * 1000).toLocaleTimeString()
        sunrise.innerHTML = new Date(data1.sys.sunrise * 1000).toLocaleTimeString()
        Detail.style.display = "block";
    }
    catch (err) {
        if(err.message===" City Not found!"){
            errorbox.innerHTML="Unvalid city name!"
        }
        else{
            errorbox.innerHTML="No network"
        }
    }
    finally{
        spinner.style.display="none"
    }
}

search.addEventListener("click", (e) => {
    console.log("clicked");
    
    let cityname = input.value
    spinner.style.display="block"
    checkweather(cityname)
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        spinner.style.display="block"
        search.click();
    }
})

input.addEventListener("click", () => {
    errorbox.innerHTML=""
    input.value = ""
    Detail.style.display = "none"
})
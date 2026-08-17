let input = document.querySelector("#inputbox")
let srcbtn = document.querySelector(".button")
let image = document.getElementById("Poster")
let visiblebox = document.querySelector(".divopen")
let loading = document.querySelector(".loading")
let metacrit = document.querySelector("#Metacritic")
let imdbRatinng = document.querySelector("#imdbRating")
let rtd = document.querySelector("#Rotten-Tomatoes")
let table = document.querySelector(".movie-table")
let movieName;
let errorbox = document.querySelector(".error")
let arr = ["Title", "Director", "Year", "Genre", "Runtime", "imdbRating", "Plot", "Released", "imdbVotes", "Writer", "Actors", "Language", "Country", "Awards", "BoxOffice"]
async function movie() {
    let apiurl = `https://www.omdbapi.com/?t=${movieName}&apikey=a587bbd0`;
    try {
        let response = await fetch(apiurl);
        // console.log("1");
        let data = await response.json();
        if (data.Response === "False") {
            throw new Error(data.Error);
        }
        // console.log(data);
        visiblebox.style.display = "block"
        image.src = data.Poster || "default.jpg"
        // let p=data.Ratings[2].Value
        // console.log(p);
        
        metacrit.textContent=data.Ratings[2]?.Value||"Not-available"
        // rtd.textContent=data.Ratings[1]?.Value||"Not-available"
        // imdbRatinng.textContent=data.Ratings[0]?.Value||"Not-available"


        table.rows[1].cells[1].textContent = data.Genre
        table.rows[3].cells[1].textContent = data.Director
        arr.forEach(element => {
            let temp1 = document.getElementById(element)
            if (!temp1) return;
            temp1.textContent = data[element] || "Not-available";
        });
    }
    catch (err) {
        // visiblebox.style.display="none"
        console.log(err);
            errorbox.style.display="block"
            errorbox.textContent=err.message;
    }
    finally {
        input.classList.toggle("inputafter");
        loading.style.display="none"
        // input.blur()d
    }
}
srcbtn.addEventListener("click", () => {
    movieName = input.value;
    cleardetails();
    loading.style.display="block"
    movie();
})
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        srcbtn.click();
    }
})
input.addEventListener("click",()=>{
    errorbox.textContent=""
})
function cleardetails() {
    visiblebox.style.display = "none"
    errorbox.style.display="none"
    arr.forEach(e=>{
        let temp1 = document.getElementById(e)
        if (!temp1) return;
        temp1.textContent=""
    })
    image.src=""
}



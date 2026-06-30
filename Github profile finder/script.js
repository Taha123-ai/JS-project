const API_URL = "https://api.github.com/users/"
let INPUT1 = document.querySelector(".input");
let INPUT1sidebtn = document.querySelector(".input-active");
let errorbox = document.querySelector(".errorbox");
let loading = document.querySelector(".loading");
let Avatar = document.querySelector(".imagebox");
let Name = document.querySelector(".name");
let Email = document.querySelector(".email");
let table = document.querySelector(".tablehaiye");
let main = document.querySelector(".main");
let BTNrepo = document.querySelector(".repobtn");
let repo = [];
async function profileinfo(username) {
    try {
        const response = await fetch(API_URL + `${username}`)
        // console.log(response.status);

        if (!response.ok) {
            throw new Error(response.status)
        }
        const INFO = await response.json()
        // console.log(INFO.status);
        BTNrepo.style.display = "block"
        main.style.display = "block"
        Name.innerHTML = INFO.name || "Name-not-available";
        Email.innerHTML = INFO.email || "Email-hidden";
        Avatar.src = INFO.avatar_url;
        table.rows[0].cells[1].innerHTML = INFO.followers
        table.rows[1].cells[1].innerHTML = INFO.following
        table.rows[2].cells[1].innerHTML = INFO.login
        table.rows[4].cells[1].innerHTML = new Date(INFO.created_at).toLocaleDateString()
        let response2 = await fetch(INFO.repos_url)
        if (!response2.ok) {
            throw new Error("ERROR_catch")
        }
        repo = await response2.json() //can only be use inside async func
        table.rows[5].cells[1].innerHTML = repo.length

    }
    catch (err) {
        console.log(err);

        if (err.message.includes("404")) {
            errorbox.innerHTML = "User Not found!"
        }
        else if (err.message.includes("403")) {
            errorbox.innerHTML = "GitHub API rate limit exceeded. Try again later.";
        }
        else if (err.message.includes("401")) {
            errorbox.innerHTML = "Authentication required or invalid token";
        }
        else if (err.message.includes("500")) {
            errorbox.innerHTML = "GitHub server error ";
        }
        else if (err.message.includes("503")) {
            errorbox.innerHTML = "GitHub service temporarily unavailable";
        }
        else if (err.message === "ERROR_catch") {
            table.rows[3].cells[1].innerHTML = "Repo can't Access!"
        }
        else {
            errorbox.innerHTML = "Network error!"
        }
    }
    finally {
        INPUT1.blur();
        loading.style.display = "none";
    }


}

BTNrepo.addEventListener("click", () => {
    BTNrepo.style.display = "none";
    table.rows[3].cells[1].innerHTML = "";
    repo.forEach((element, index) => {
        table.rows[3].cells[1].innerHTML += `${(index + 1)}: ${element.name}<br>`
        console.log(element)
    })
});
INPUT1.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        INPUT1sidebtn.click();
    }
})

INPUT1sidebtn.addEventListener("click", () => {
    let username = INPUT1.value;
    cleardetails();
    loading.style.display = "block";
    profileinfo(username);
})
function cleardetails() {
    INPUT1.value = ""
    errorbox.innerHTML = ""
    main.style.display = "none"
    BTNrepo.style.display = "none"
    Name.innerHTML = ""
    Avatar.src = ""
    Email.innerHTML = ""
    repo = []
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[1].innerHTML = ""
    }
}
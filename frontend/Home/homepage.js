const userSignupForm = document.querySelector("#user-signup")
const userSigninForm = document.querySelector("#user-signin")
const isLoggedIn = document.querySelector(".isLoggedIn")
const logout = document.querySelector("#logout")

function setIsLoggedIn() {
isLoggedIn.textContent = localStorage.getItem("token")
    ? "You're logged in!"
    : "Not Logged In"
}

setIsLoggedIn()

userSignupForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const username = formData.get("username")
    const password = formData.get("password")

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    }).then( response => response.json())
    .then(() => {
        window.location.href = window.location.href
        }).catch(error => console.error(error.message))
})


userSigninForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const username = formData.get("username")
    const password = formData.get("password")

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
    }).then(response => response.json())
        .then(response => {
            const { token } = response
            localStorage.setItem("token", token) 
            setIsLoggedIn()
    }).catch(error => console.error(error.message))
})

logout.addEventListener("click", () => {
    logOut()
    setIsLoggedIn()
})

function logOut() {
    localStorage.removeItem("token")
    
}









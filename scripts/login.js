let loginForm = document.getElementById("login-form");
if(loginForm) {
    loginForm.addEventListener("submit", login);
}

function login(e) {
    e.preventDefault();
    const user = {
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    console.log(user)
    let greeting = document.getElementById("greeting")
    greeting.innerHTML = `Welcome ${user.userName}!!`
}
let loginForm = document.getElementById("login-form");
if(loginForm) {
    loginForm.addEventListener("submit", login);
}

async function login(e) {
    e.preventDefault();
    const user = {
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    
    try {
        await fetch("/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
    } catch(error) {
        console.error(error);
    }
}
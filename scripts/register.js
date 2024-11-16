let registerForm = document.getElementById("register-form")
registerForm.addEventListener("submit", register);

function register(e) {
    e.preventDefault();
    const user = {
        firstName: document.getElementById("new-firstname").value, 
        lastName: document.getElementById("new-lastname").value,
        userName: document.getElementById("new-username").value,
        password: document.getElementById("new-password").value,
        confirmPassword: document.getElementById("new-confirmpassword").value
    }
    console.log(user)

    //this would be the fetch call to the server, will be replaced later
    let greeting = document.getElementById("greeting")
    greeting.innerHTML = `Welcome ${user.firstName} ${user.lastName}!!`
}





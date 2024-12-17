let registerForm = document.getElementById("register-form")
registerForm.addEventListener("register-submit", register);

async function register(e) {
    e.preventDefault();

    const user = {
        username: document.getElementById("new-username").value,
        password: document.getElementById("new-password").value,
        email: document.getElementById("new-email").value,
        location: document.getElementById("new-location").value
    }

    try {
        const response = await fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const result = await response.json();
    } catch (error) {
        console.error(error);
    }


}





async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/users?email=${email}`);
        const users = await response.json();

        if (users.length > 0) {
            const user = users[0];
            if (user.password === password) {
                alert("Login successful!");
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'user-page.html';
            } else {
                alert("Invalid password");
            }
        } else {
            alert("Email not found");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Error logging in");
    }
}

document.querySelector('.login').addEventListener('click', login);

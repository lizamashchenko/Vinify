async function createAccount() {
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }

    const user = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            alert("Account created successfully! Redirecting to login page...");
            window.location.href = 'login-page.html';
        } else {
            alert("Error creating account");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Error creating account");
    }
}



document.getElementById('adminLoginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    const adminUsername = '8KWmTwQ7q6bwb6me2p';
    const adminPassword = 'fcsPF3QBsT923wJ38P'; // Use secure storage for credentials in production

    if (username === adminUsername && password === adminPassword) {
        localStorage.setItem('userRole', 'admin');
        window.location.href = 'admin.html';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid admin credentials!';
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const users = [
        { username: 'admin', password: '1234', role: 'admin' },
        { username: 'user1', password: 'abcd', role: 'usuario (emprendedor)' }
    ];
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'user.html';
        }
    } else {
        document.getElementById('loginMessage').innerText = 'Usuario o contraseña incorrecta';
    }
});

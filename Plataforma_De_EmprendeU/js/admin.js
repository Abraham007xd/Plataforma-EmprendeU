
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#adminTable tbody');
        data.forEach(user => {
            const row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.business}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });

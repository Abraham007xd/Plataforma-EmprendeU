
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#userTable tbody');
        data.forEach(product => {
            const row = `<tr>
                <td>${product.product}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });

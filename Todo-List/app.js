
// const btnEl = document.getElementById("btnEl");

// btnEl.addEventListener("click",()=>{
//     const usernameEl = document.getElementById("usernameEl").value;
//     const pointEl = document.getElementById("pointEl").value;

//     addDataToTable(usernameEl , pointEl);


// })


// const addDataToTable = (value1,value2) => {
    
//     const bodyDataEl = document.getElementById("bodyData");




// }

// document.addEventListener('DOMContentLoaded', function() {
//     const usernameEl = document.getElementById('usernameEl');
//     const pointEl = document.getElementById('pointEl');
//     const btnEl = document.getElementById('btnEl');
//     const bodyData = document.getElementById('bodyData');

//     let rowIndex = 1;

//     btnEl.addEventListener('click', function() {
//         const username = usernameEl.value.trim();
//         const point = pointEl.value.trim();

//         if (username && point) {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <th scope="row">${rowIndex}</th>
//                 <td>${username}</td>
//                 <td>${point}</td>
//                 <td><button class="btn btn-sm btn-primary edit-btn">Edit</button></td>
//             `;
//             bodyData.appendChild(row);
//             rowIndex++;

//             // Clear input fields
//             usernameEl.value = '';
//             pointEl.value = '';
//         } else {
//             alert('Please fill in both fields');
//         }
//     });

//     // Edit button event listener
//     bodyData.addEventListener('click', function(event) {
//         if (event.target && event.target.classList.contains('edit-btn')) {
//             const row = event.target.closest('tr');
//             const nameCell = row.querySelector('td:nth-child(2)');
//             const pointCell = row.querySelector('td:nth-child(3)');
//             let username = usernameEl.value.trim();
//             let point = pointEl.value.trim();

//             nameCell.innerHTML = username;
//             pointCell.innerHTML = point;

//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const usernameEl = document.getElementById('usernameEl');
    const pointEl = document.getElementById('pointEl');
    const btnEl = document.getElementById('btnEl');
    const bodyData = document.getElementById('bodyData');

    let rowIndex = 1;
    let editingRow = null;

    btnEl.addEventListener('click', function() {
        const username = usernameEl.value.trim();
        const point = pointEl.value.trim();

        if (username && point) {
            if (editingRow) {
                // Update existing row
                editingRow.querySelector('td:nth-child(2)').textContent = username;
                editingRow.querySelector('td:nth-child(3)').textContent = point;
                editingRow = null;
                btnEl.textContent = 'Add';
            } else {
                // Add new row
                const row = document.createElement('tr');
                row.innerHTML = `
                    <th scope="row">${rowIndex}</th>
                    <td>${username}</td>
                    <td>${point}</td>
                    <td><button class="btn btn-sm btn-primary edit-btn">Edit</button></td>
                `;
                bodyData.appendChild(row);
                rowIndex++;
            }

            // Clear input fields
            usernameEl.value = '';
            pointEl.value = '';
        } else {
            alert('Please fill in both fields');
        }
    });

    // Edit button event listener
    bodyData.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            const nameCell = row.querySelector('td:nth-child(2)');
            const pointCell = row.querySelector('td:nth-child(3)');

            // Load existing values into input fields
            usernameEl.value = nameCell.textContent;
            pointEl.value = pointCell.textContent;

            // Set the editing row
            editingRow = row;

            // Change button text to 'Update'
            btnEl.textContent = 'Update';
        }
    });
});






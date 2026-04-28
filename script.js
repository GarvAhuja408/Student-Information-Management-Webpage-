// Get form and table
let form = document.getElementById("studentForm");
let table = document.getElementById("studentTable");

// Form submit event
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    // Create row
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    table.appendChild(row);

    form.reset(); // reset form
});

// Delete function
function deleteRow(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
}
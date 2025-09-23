document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("addStudentButton");
    const tableContent = document.getElementById("table-content");

    addStudentButton.addEventListener("click", () => {
        // Get input values
        const idNumber = document.getElementById("idNumber").value.trim();
        const firstName = document.getElementById("firstName").value.trim();
        const middleName = document.getElementById("middleName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();

        // Simple validation
        if (!idNumber || !firstName || !lastName) {
            alert("Please fill out ID Number, Firstname, and Lastname.");
            return;
        }

        // Create new row
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${idNumber}</td>
            <td>${firstName}</td>
            <td>${middleName}</td>
            <td>${lastName}</td>
        `;

        // Append row to table
        tableContent.appendChild(row);

        // Clear input fields
        document.getElementById("studentForm").reset();
    });
});
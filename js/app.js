// Wait for the DOM to load before running code
document.addEventListener("DOMContentLoaded", function () {
    const addSubjectBtn = document.getElementById("addSubject");
    const subjectCodeInput = document.getElementById("subjectCode");
    const subjectNameInput = document.getElementById("subjectName");
    const unitsInput = document.getElementById("units");
    const tableContent = document.getElementById("table-content");

    addSubjectBtn.addEventListener("click", function () {
        // Get the values from the inputs
        const code = subjectCodeInput.value.trim();
        const name = subjectNameInput.value.trim();
        const units = unitsInput.value.trim();

        // Basic validation
        if (!code || !name || !units) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new table row
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${code}</td>
            <td>${name}</td>
            <td>${units}</td>
            <td>
                <input class="btn btn-warning btn-sm" type="button" value="Edit">
                <input class="btn btn-danger btn-sm" type="button" value="Delete">
            </td>
        `;

        // Append the new row to the table
        tableContent.appendChild(newRow);

        // Clear input fields after adding
        subjectCodeInput.value = "";
        subjectNameInput.value = "";
        unitsInput.value = "";
    });
});

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

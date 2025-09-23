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

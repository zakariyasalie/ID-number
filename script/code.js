function checkID() {
    var idInput = document.getElementById("idInput").value;
    var resultDiv = document.getElementById("result");

    // Check if ID is 13 characters long and contains only numbers
    if (idInput.length === 13 && /^\d+$/.test(idInput)) {
        var year = idInput.substring(0, 2);
        var month = idInput.substring(2, 4);
        var day = idInput.substring(4, 6);
        var genderCode = idInput.substring(6, 7);

        var gender = genderCode < 5 ? "Female" : "Male";

        resultDiv.innerHTML = "Date of Birth: " + day + "/" + month + "/" + year + "<br>" +
                              "Gender: " + gender;
    } else {
        resultDiv.innerHTML = "Invalid ID number. Please enter a valid 13-digit number.";
    }
}

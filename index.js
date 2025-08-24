const validNumber = 12345678910;
const validPin = 1234;

document.getElementById("login").addEventListener("click", function(e) {
    e.preventDefault(); // prevent form submission

    // Get input values and convert to numbers
    const mobileNumber = Number(document.getElementById("mobile-number").value.trim());
    const pin = Number(document.getElementById("pin").value.trim());

    // Check credentials
    if (mobileNumber === validNumber && pin === validPin) {
        window.location.href = "main.html";
    } else {
        alert("Enter valid Number and Pin");
    }
});

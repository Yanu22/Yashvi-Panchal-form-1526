function validateForm() {
    const errors = [];
    const data = {};
    
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

     // Check if fullname is not empty.
    // If so:
       // Pass the collected value to your object "data".
    // Otherwise:
       // Create a corresponding error-message and add it to your array "errors".
    // End your conditional here.


    if (fullName.value !== "") {
        data.fullname = fullName.value;
    } else {
        errors.push("Full Name is required");
    }


    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value to your object "data".
       // Otherwise:
          // Create a corresponding error-message and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message and add it to your array "errors"
    // End your outer conditional here.


    if (email.value !== "") {
        var emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailvalidation.test(email.value)) {
            data.email = email.value;
        } else {
            errors.push("Invalid Email");
        }
    } else {
        errors.push("Email is required");
    }

    // Check if message is not empty.
    // If so:
       // Pass the collected value to your object "data".
    // Otherwise:
       // Create a corresponding error-message and add it to your array "errors"
    // End your conditional here.


    if (message.value !== "") {
        data.message = message.value;
    } else {
        errors.push("Message is required");
    }

    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Data:", data);
        fullName.value = "";
        email.value = "";
        message.value = "";
    }
}  

document.getElementById("submit-button").addEventListener("click", function() {
    validateForm();
});

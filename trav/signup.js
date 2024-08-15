document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Fetch input values
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var idProof = document.getElementById("id-proof").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm-password").value.trim();
    
    // Perform signup logic (here you can send data to backend or perform client-side validation)
    if (username !== "" && email !== "" && idProof !== "" && password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        // Dummy alert for demonstration
        alert("Sign up successful! Username: " + username + ", Email: " + email + ", ID Proof: " + idProof);
        window.location.href = "page.html";
        
        // Clear form fields
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("id-proof").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm-password").value = "";
      } else {
        alert("Passwords do not match. Please try again.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  });
  
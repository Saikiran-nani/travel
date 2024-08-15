document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var errorMessage = document.getElementById("error-message");
  
    // Simulated login credentials (Replace this with your actual login mechanism)
    var validemail = "saikiranamgothu@gmail.com";
    var validPassword = "saikiran123";
  
    // Validate email and password
    if (email === "" || password === "") {
      errorMessage.textContent = "email and password are required.";
    } else if (email !== validemail || password !== validPassword) {
      errorMessage.textContent = "Incorrect email or password.";
    } else {
      // Successful login
      errorMessage.textContent = ""; // Clear error message
      alert("Welcome, " + email + "! to WeTravel");
      // Redirect to dashboard or any other page
      window.location.href = "page.html"; 
      // Redirect to dashboard page
    }
  });
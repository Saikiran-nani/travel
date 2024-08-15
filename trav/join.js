document.getElementById("join-group-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var groupName = document.getElementById("group-name").value.trim();
    var groupCode = document.getElementById("group-code").value.trim();
    
    // Simulate joining group logic
    setTimeout(function() {
      if (groupName === "Trip to goa" && groupCode === "152535") {
        // Redirect to Goa group page upon successful joining
        window.location.href = "group.html";
      } else if (groupName === "Goa Tour" && groupCode === "224563") {
        // Redirect to Mumbai group page upon successful joining
        window.location.href = "group.html";
      } else if (groupName === "Travel to goa" && groupCode === "438265") {
        // Redirect to Hyderabad group page upon successful joining
        window.location.href = "group.html";
      } else {
        document.getElementById("join-status").textContent = "Invalid group name or code. Please try again.";
      }
    }, 1000); // Simulate delay for demonstration purposes
  });
  
  
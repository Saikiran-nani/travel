document.getElementById("group-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var groupName = document.getElementById("groupName").value.trim();
    var groupDescription = document.getElementById("groupDescription").value.trim();
  
    // Validate group name and description
    if (groupName === "" || groupDescription === "") {
      alert("Please fill out all fields.");
    } else {
      // Simulated creation of group (replace this with actual implementation)
      createGroup(groupName, groupDescription);
    }
  });
  
  function createGroup(name, description) {
    // Here you can implement code to create a group, like sending an API request
    // For the sake of this example, let's just log the details to console
    console.log("Group Name: " + name);
    console.log("Group Description: " + description);
    alert("Group created successfully!");
    window.location.href ="group.html";
  }
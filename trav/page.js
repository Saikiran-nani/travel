document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var destination = document.getElementById("search").value;
    // var date = document.getElementById("date").value;
    
    // Here you can implement logic to search for travel buddies based on the destination and date
    // For demonstration purposes, let's just display a sample result
    var resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "<li>Travel to Goa -- #438265</li><li>Goa Tour -- #224563</li><li>Trip to Goa  -- #152535</li>";
});


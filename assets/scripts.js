document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown buttons
    var dropdownButtons = document.querySelectorAll(".dropdown-button");
  
    console.log("Total number of dropdown buttons found:", dropdownButtons.length); // Log how many buttons are found
    
    dropdownButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        // Log when a button is clicked
        console.log("Button " + (index + 1) + " clicked!");
  
        // Find the next sibling dropdown-content to toggle
        var content = this.nextElementSibling;
        
        // Log the current display state of the content
        console.log("Current display of content:", content.style.display);
  
        if (content.style.display === "block") {
          content.style.display = "none";
          console.log("Content hidden for button " + (index + 1)); // Log content is hidden
        } else {
          content.style.display = "block";
          console.log("Content displayed for button " + (index + 1)); // Log content is shown
        }
      });
    });
  });
  
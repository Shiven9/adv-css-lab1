// JavaScript to toggle visibility of content
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-btn");
    const hiddenContent = document.getElementById("extra-content");
  
    toggleButton.addEventListener("click", function() {
      if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
      } else {
        hiddenContent.style.display = "none";
      }
    });
  });
  
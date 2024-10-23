// Simulate loading time using JavaScript
window.onload = function () {
  // Hide the loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000); // Set the time for how long the loader should appear
};

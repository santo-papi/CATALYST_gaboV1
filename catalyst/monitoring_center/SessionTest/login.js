document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are valid
    if (username === "admin" && password === "123") {
      // Generate a unique ID for the account
      const accountId = generateUniqueId();

      // Save the account ID to session storage
      sessionStorage.setItem("accountId", accountId);

      // If valid, redirect to admin.html
      window.location.href = "admin/admin.html";
    } else if (username === "monitoring" && password === "123") {
      // Generate a unique ID for the account
      const accountId = generateUniqueId();

      // Save the account ID to session storage
      sessionStorage.setItem("accountId", accountId);

      // If valid, redirect to monitoring.html
      window.location.href = "monitoring/monitoring.html";
    } else {
      // If invalid, display an error message
      alert("Invalid username or password. Please try again.");
    }
  });
});

// Function to generate a unique ID
function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Check if we are on the form page
var form = document.getElementById("resumeForm");
if (form) {
    // Form submission event listener
    form.onsubmit = function (event) {
        event.preventDefault(); // Stop default form submission
        // Get input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var experience = document.getElementById("experience").value;
        // Store data in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("education", education);
        localStorage.setItem("skills", skills);
        localStorage.setItem("experience", experience);
        // Redirect to the display page
        window.location.href = "resume.html";
    };
}
else {
    // Display page logic
    // Retrieve data from localStorage and show it
    document.getElementById("displayName").innerText = localStorage.getItem("name") || "";
    document.getElementById("displayEmail").innerText = localStorage.getItem("email") || "";
    document.getElementById("displayPhone").innerText = localStorage.getItem("phone") || "";
    document.getElementById("displayEducation").innerText = localStorage.getItem("education") || "";
    document.getElementById("displaySkills").innerText = localStorage.getItem("skills") || "";
    document.getElementById("displayExperience").innerText = localStorage.getItem("experience") || "";
}

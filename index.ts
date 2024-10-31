// Check if we are on the form page
const form = document.getElementById("resumeForm") as HTMLFormElement;

if (form) {
    // Form submission event listener
    form.onsubmit = function (event: Event) {
        event.preventDefault(); // Stop default form submission

        // Get input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;

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
} else {
    // Display page logic
    // Retrieve data from localStorage and show it
    (document.getElementById("displayName") as HTMLSpanElement).innerText = localStorage.getItem("name") || "";
    (document.getElementById("displayEmail") as HTMLSpanElement).innerText = localStorage.getItem("email") || "";
    (document.getElementById("displayPhone") as HTMLSpanElement).innerText = localStorage.getItem("phone") || "";
    (document.getElementById("displayEducation") as HTMLSpanElement).innerText = localStorage.getItem("education") || "";
    (document.getElementById("displaySkills") as HTMLSpanElement).innerText = localStorage.getItem("skills") || "";
    (document.getElementById("displayExperience") as HTMLSpanElement).innerText = localStorage.getItem("experience") || "";
}

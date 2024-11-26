// Check if we are on the form page
const form = document.getElementById("resumeForm") as HTMLFormElement;

if (form) {
    
    form.onsubmit = function (event: Event) {
        event.preventDefault();

    
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value; // comma-separated
        const skills = (document.getElementById("skills") as HTMLInputElement).value; // comma-separated
        const experience = (document.getElementById("experience") as HTMLInputElement).value; // comma-separated

        
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

    (document.getElementById("displayName") as HTMLSpanElement).innerText = localStorage.getItem("name") || "";
    (document.getElementById("displayEmail") as HTMLSpanElement).innerText = localStorage.getItem("email") || "";
    (document.getElementById("displayPhone") as HTMLSpanElement).innerText = localStorage.getItem("phone") || "";
    
  
    const education = localStorage.getItem("education");
    const educationList = education ? education.split(',').map(item => item.trim()) : [];
    const educationContainer = document.getElementById("displayEducation") as HTMLElement;

    if (educationList.length > 0) {
        const ul = document.createElement("ul"); 
        educationList.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            ul.appendChild(li);
        });
        educationContainer.appendChild(ul);
    }

    // Retrieve and display skills as a list
    const skills = localStorage.getItem("skills");
    const skillsList = skills ? skills.split(',').map(skill => skill.trim()) : [];
    const skillsContainer = document.getElementById("displaySkills") as HTMLElement;

    if (skillsList.length > 0) {
        const ul = document.createElement("ul"); // Create a new unordered list
        skillsList.forEach(skill => {
            const li = document.createElement("li");
            li.innerText = skill;
            ul.appendChild(li);
        });
        skillsContainer.appendChild(ul);
    }

    // Retrieve and display experience as a list
    const experience = localStorage.getItem("experience");
    const experienceList = experience ? experience.split(',').map(item => item.trim()) : [];
    const experienceContainer = document.getElementById("displayExperience") as HTMLElement;

    if (experienceList.length > 0) {
        const ul = document.createElement("ul"); // Create a new unordered list
        experienceList.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            ul.appendChild(li);
        });
        experienceContainer.appendChild(ul);
    }
}

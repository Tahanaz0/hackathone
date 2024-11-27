// Check if we are on the form page
var form = document.getElementById("resumeForm");
if (form) {
    form.onsubmit = function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value; // comma-separated
        var skills = document.getElementById("skills").value; // comma-separated
        var experience = document.getElementById("experience").value; // comma-separated
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
    document.getElementById("displayName").innerText = localStorage.getItem("name") || "";
    document.getElementById("displayEmail").innerText = localStorage.getItem("email") || "";
    document.getElementById("displayPhone").innerText = localStorage.getItem("phone") || "";
    var education = localStorage.getItem("education");
    var educationList = education ? education.split(',').map(function (item) { return item.trim(); }) : [];
    var educationContainer = document.getElementById("displayEducation");
    if (educationList.length > 0) {
        var ul_1 = document.createElement("ul");
        educationList.forEach(function (item) {
            var li = document.createElement("li");
            li.innerText = item;
            ul_1.appendChild(li);
        });
        educationContainer.appendChild(ul_1);
    }
    // Retrieve and display skills as a list
    var skills = localStorage.getItem("skills");
    var skillsList = skills ? skills.split(',').map(function (skill) { return skill.trim(); }) : [];
    var skillsContainer = document.getElementById("displaySkills");
    if (skillsList.length > 0) {
        var ul_2 = document.createElement("ul"); // Create a new unordered list
        skillsList.forEach(function (skill) {
            var li = document.createElement("li");
            li.innerText = skill;
            ul_2.appendChild(li);
        });
        skillsContainer.appendChild(ul_2);
    }
    // Retrieve and display experience as a list
    var experience = localStorage.getItem("experience");
    var experienceList = experience ? experience.split(',').map(function (item) { return item.trim(); }) : [];
    var experienceContainer = document.getElementById("displayExperience");
    if (experienceList.length > 0) {
        var ul_3 = document.createElement("ul"); // Create a new unordered list
        experienceList.forEach(function (item) {
            var li = document.createElement("li");
            li.innerText = item;
            ul_3.appendChild(li);
        });
        experienceContainer.appendChild(ul_3);
    }
}
var saveBtn = document.getElementById("saveBtn");
if (saveBtn) {
    saveBtn.addEventListener("click", function () {
        var name = document.getElementById("displayName").value;
        var email = document.getElementById("displayEmail").value;
        var phone = document.getElementById("displayPhone").value;
        var education = document.getElementById("displayEducation").value;
        var skills = document.getElementById("displaySkills").value;
        var experience = document.getElementById("displayExperience").value;
        // Store the edited data back to localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("education", education);
        localStorage.setItem("skills", skills);
        localStorage.setItem("experience", experience);
        alert("Changes saved!");
    });
}

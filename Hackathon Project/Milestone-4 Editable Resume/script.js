// Accessing DOM elements
var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume-section');
var generateButton = document.getElementById('generate-resume');
var editButton = document.getElementById('edit-resume');
// Input Fields
var nameInput = document.getElementById('name');
var contactInput = document.getElementById('contact');
var emailInput = document.getElementById('email');
var githubInput = document.getElementById('github');
var addressInput = document.getElementById('address');
var higherSchoolInput = document.getElementById('higher-school');
var degreeInput = document.getElementById('degree');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Resume Display Fields
var resumeName = document.getElementById('resume-name');
var resumeContact = document.getElementById('resume-contact');
var resumeEmail = document.getElementById('resume-email');
var resumeGithub = document.getElementById('resume-github');
var resumeAddress = document.getElementById('resume-address');
var resumeHigherSchool = document.getElementById('resume-higher-school');
var resumeDegree = document.getElementById('resume-degree');
var resumeExperience = document.getElementById('resume-experience');
var resumeSkills = document.getElementById('resume-skills');
// Function to generate the resume
var generateResume = function () {
    // Check if any required fields are empty
    if (nameInput.value === "" || contactInput.value === "" || emailInput.value === "" ||
        githubInput.value === "" || addressInput.value === "" || higherSchoolInput.value === "" ||
        degreeInput.value === "" || experienceInput.value === "" || skillsInput.value === "") {
        alert("Please fill out all the fields.");
        return;
    }
    // Update resume with form values
    resumeName.textContent = nameInput.value;
    resumeContact.textContent = contactInput.value;
    resumeEmail.textContent = emailInput.value;
    resumeGithub.textContent = githubInput.value;
    resumeAddress.textContent = addressInput.value;
    resumeHigherSchool.textContent = higherSchoolInput.value;
    resumeDegree.textContent = degreeInput.value;
    resumeExperience.textContent = experienceInput.value;
    resumeSkills.textContent = skillsInput.value;
    // Hide the form and show the resume
    form.style.display = 'none';
    resumeSection.style.display = 'block';
};
// Function to edit the resume
var editResume = function () {
    // Show the form and hide the resume
    form.style.display = 'block';
    resumeSection.style.display = 'none';
};
// Event listeners
generateButton.addEventListener('click', generateResume);
editButton.addEventListener('click', editResume);

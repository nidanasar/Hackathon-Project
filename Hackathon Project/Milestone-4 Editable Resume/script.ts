// Accessing DOM elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume-section') as HTMLElement;
const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
const editButton = document.getElementById('edit-resume') as HTMLButtonElement;

// Input Fields
const nameInput = document.getElementById('name') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const githubInput = document.getElementById('github') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const higherSchoolInput = document.getElementById('higher-school') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

// Resume Display Fields
const resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeContact = document.getElementById('resume-contact') as HTMLElement;
const resumeEmail = document.getElementById('resume-email') as HTMLElement;
const resumeGithub = document.getElementById('resume-github') as HTMLElement;
const resumeAddress = document.getElementById('resume-address') as HTMLElement;
const resumeHigherSchool = document.getElementById('resume-higher-school') as HTMLElement;
const resumeDegree = document.getElementById('resume-degree') as HTMLElement;
const resumeExperience = document.getElementById('resume-experience') as HTMLElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLElement;

// Function to generate the resume
const generateResume = () => {
    // Check if any required fields are empty
    if (
        nameInput.value === "" || contactInput.value === "" || emailInput.value === "" ||
        githubInput.value === "" || addressInput.value === "" || higherSchoolInput.value === "" ||
        degreeInput.value === "" || experienceInput.value === "" || skillsInput.value === ""
    ) {
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
const editResume = () => {
    // Show the form and hide the resume
    form.style.display = 'block';
    resumeSection.style.display = 'none';
};

// Event listeners
editButton.addEventListener('click', editResume);

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
    generateButton.addEventListener('click', generateResume);
});


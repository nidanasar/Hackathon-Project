
// Get the elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const summaryInput = document.getElementById('summary') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const resumePreview = document.getElementById('resume-preview') as HTMLDivElement;

// Event listener for the 'Generate Preview' button
generateBtn.addEventListener('click', () => {
    // Generate the resume preview
    resumePreview.innerHTML = `
        <h2>Resume Preview</h2>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Phone:</strong> ${phoneInput.value}</p>
        <p><strong>Summary:</strong> ${summaryInput.value}</p>
        <p><strong>Skills:</strong> ${skillsInput.value}</p>
        <p><strong>Experience:</strong> ${experienceInput.value}</p>
        <p><strong>Education:</strong> ${educationInput.value}</p>
    `;
});

// Event listener for the 'Hide/Show Skills' button
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsInput.style.display === 'none') {
        skillsInput.style.display = 'block';
    } else {
        skillsInput.style.display = 'none';
    }
});

// // Define types
// type ResumeData = {
//     name: string;
//     title: string;
//     email: string;
//     phone: string;
//     summary: string;
//     skills: string[];
//     experience: string[];
//     education: string;
//     profilePictureUrl?: string;
// };
// // Function to generate the resume preview
// function generateResumePreview(data: ResumeData) {
//     const resumePreview = document.getElementById('resume-preview')!;
//     resumePreview.innerHTML = `
//         <div class="header">
//             ${data.profilePictureUrl ? `<img src="${data.profilePictureUrl}" alt="Profile Picture">` : ''}
//             <h1>${data.name}</h1>
//             <p>${data.title}</p>
//             <p>Email: ${data.email} | Phone: ${data.phone}</p>
//         </div>
//         <div class="section">
//             <h2>Summary</h2>
//             <p>${data.summary}</p>
//         </div>
//         <div class="section">
//             <h2>Skills</h2>
//             <ul>
//                 ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
//             </ul>
//         </div>
//         <div class="section">
//             <h2>Experience</h2>
//             <ul>
//                 ${data.experience.map(exp => `<li>${exp}</li>`).join('')}
//             </ul>
//         </div>
//         <div class="section">
//             <h2>Education</h2>
//             <p>${data.education}</p>
//         </div>
//     `;
//     resumePreview.style.display = 'block';
// }
// // Event listener for the "Generate" button
// document.getElementById('generate-btn')!.addEventListener('click', () => {
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const title = (document.getElementById('title') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value.split(",");
//     const experience = (document.getElementById('experience') as HTMLInputElement).value.split(",");
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     // Handling profile picture upload
//     const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
//     let profilePictureUrl = '';
//     if (profilePictureInput.files && profilePictureInput.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             profilePictureUrl = e.target?.result as string;
//             const resumeData: ResumeData = { name, title, email, phone, summary, skills, experience, education, profilePictureUrl };
//             generateResumePreview(resumeData);
//         };
//         reader.readAsDataURL(profilePictureInput.files[0]);
//     } else {
//         const resumeData: ResumeData = { name, title, email, phone, summary, skills, experience, education };
//         generateResumePreview(resumeData);
//     }
// });
// type ResumeData = {
//     name: string;
//     title: string;
//     email: string;
//     phone: string;
//     summary: string;
//     skills: string[];
//     experience: string[];
//     education: string;
//     profilePictureUrl?: string; }// Optional
// // Function to generate the resume preview
// function generateResumePreview(data: ResumeData ) {
//     const resumePreview = document.getElementById('resume-preview')!;
//     // Check if skills are provided, and create a skills section only if they exist
//     const skillsSection = data.skills.length > 0 ? `
//         <div class="section">
//             <h2>Skills</h2>
//             <ul>
//                 ${data.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
//             </ul>
//         </div>` : ''; // If no skills, leave this empty
//     resumePreview.innerHTML = `
//         <div class="header">
//             ${data.profilePictureUrl ? `<img src="${data.profilePictureUrl}" alt="Profile Picture">` : ''}
//             <h1>${data.name}</h1>
//             <p>${data.title}</p>
//             <p>Email: ${data.email} | Phone: ${data.phone}</p>
//         </div>
//         <div class="section">
//             <h2>Summary</h2>
//             <p>${data.summary}</p>
//         </div>
//         ${skillsSection} <!-- Skills section is conditionally included -->
//         <div class="section">
//             <h2>Experience</h2>
//             <ul>
//                 ${data.experience.map(exp => `<li>${exp.trim()}</li>`).join('')}
//             </ul>
//         </div>
//         <div class="section">
//             <h2>Education</h2>
//             <p>${data.education}</p>
//         </div>
//     `;
//     resumePreview.style.display = 'block';
// }
// // Event listener for the "Generate" button
// document.getElementById('generate-btn')!.addEventListener('click', () => {
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const title = (document.getElementById('title') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
//     // Only add skills that are non-empty after trimming
//     const skills = (document.getElementById('skills') as HTMLInputElement).value
//                     .split(',')
//                     .map(skill => skill.trim())
//                     .filter(skill => skill.length > 0);
//     const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     // Handling profile picture upload
//     const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
//     let profilePictureUrl = '';
//     if (profilePictureInput.files && profilePictureInput.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             profilePictureUrl = e.target?.result as string;
//             const resumeData: ResumeData = { name, title, email, phone, summary, skills, experience, education, profilePictureUrl };
//             generateResumePreview(resumeData);
//         };
//         reader.readAsDataURL(profilePictureInput.files[0]);
//     } else {
//         const resumeData: ResumeData = { name, title, email, phone, summary, skills, experience, education };
//         generateResumePreview(resumeData);
//     }
// });
// Get the elements
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var summaryInput = document.getElementById('summary');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var educationInput = document.getElementById('education');
var generateBtn = document.getElementById('generate-btn');
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var resumePreview = document.getElementById('resume-preview');
// Event listener for the 'Generate Preview' button
generateBtn.addEventListener('click', function () {
    // Generate the resume preview
    resumePreview.innerHTML = "\n        <h2>Resume Preview</h2>\n        <p><strong>Name:</strong> ".concat(nameInput.value, "</p>\n        <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n        <p><strong>Phone:</strong> ").concat(phoneInput.value, "</p>\n        <p><strong>Summary:</strong> ").concat(summaryInput.value, "</p>\n        <p><strong>Skills:</strong> ").concat(skillsInput.value, "</p>\n        <p><strong>Experience:</strong> ").concat(experienceInput.value, "</p>\n        <p><strong>Education:</strong> ").concat(educationInput.value, "</p>\n    ");
});
// Event listener for the 'Hide/Show Skills' button
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsInput.style.display === 'none') {
        skillsInput.style.display = 'block';
    }
    else {
        skillsInput.style.display = 'none';
    }
});

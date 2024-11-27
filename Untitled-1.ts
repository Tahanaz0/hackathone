


// Collecting form data
// const name1 = (document.getElementById("name") as HTMLInputElement);
// const email = (document.getElementById("email") as HTMLInputElement);
const phone = (document.getElementById("phone") as HTMLInputElement);
// const education = (document.querySelector("input[name='education']") as HTMLInputElement);
// const skills = (document.querySelector("input[name='skills']") as HTMLInputElement);
// const experience = (document.querySelector("input[name='experience']") as HTMLInputElement)
const buttonElement = document.getElementById('submit') as HTMLButtonElement;

const inputElement = document.getElementById('email') as HTMLInputElement;
buttonElement.addEventListener('click', () => {
    const inputValue: string = inputElement.value;
    // const numElement:string=phone.value;
    // console.log(numElement);
    
    console.log(inputValue ,'kdnsa');  // Output the input value to the console
});

if (inputElement) {
    const inputValue: string = inputElement.value;
    console.log(inputValue,'if con');
} else {
    console.error('Input element not found!');
}
;



// Creating an object to hold the form data
// const resumeData = {
//     name1,
//     email,
//     phone,
//     education,
//     skills,
//     experience
// };

// Perform desired actions with the form data (e.g., send to server, log to console)
// console.log(email);

// Example of form submission to a server (uncomment and replace URL)
// fetch('https://example.com/submit', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(resumeData),
// })
// .then(response => response.json())
// .then(data => {
//     console.log('Success:', data);
// })
// .catch((error) => {
//     console.error('Error:', error);
// });

// Optionally reset the form
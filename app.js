// // DOM elements
// const curtain = document.getElementById("curtain");
// const navbar = document.getElementById("navbar");
// const openSidebar = document.getElementById("open");
// const closeSidebar = document.getElementById("close");
// const sidebar = document.getElementById("sidebar");
// const backdrop = document.getElementById("backdrop");
// const submitBtn = document.getElementById("submit-btn");
// const firstName = document.getElementById("first-name");
// const lastName = document.getElementById("last-name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const homeSection = document.getElementById("home-section");
// const clipPath = document.getElementById("clip-path");
// const examSection = document.getElementById("exam-section");
// const answer = document.getElementById("answer");
// const question = document.getElementById("question");
// const nextBtn = document.getElementById("next-btn");
// const minute = document.getElementById("min");
// const second = document.getElementById("sec");

// // variables
// let spaceBarPressed = true;
// let minutes = 60;
// let seconds = 00;
// minute.textContent = minutes;
// answer.focus();
// let questionNumber = 0;
// let questionNumberUsed = [0, 1, 2, 3, 4];

// // Array of questions
// const questions = [
//   {
//     question: `Write a C program to convert a Octal number into hexa-decimal number
    
//     example:
//     Input : 47

//     output: 
//     The equivalent hexa-decimal number is :- 27
//     `,
//   },
//   {
//     question: `Write a C program to print the Pascal Triangle upto n rows
    
//     example:
//     Pascal's Triangle of 3 rows
//     ____1
//     __1___1
//     1___2___1
//     `,
//   },
//   {
//     question: `Write a C program to print the host name and the ip address
    
//     example:

//     Current Host Name: soumyadeep-VirtualBox
//     Host IP: 127.0.1.1
//     `,
//   },
//   {
//     question: `Write a C program to print the right view of binary tree
    
//       Given a Binary Tree, print right view of it. right view of a Binary Tree is set of nodes visible when tree is visited from right side.

//       For example :-

//       input: 
//           ____1
//          ___/ \\
//         __2__3
//        _/_\\ 
//       3__4
      
//       Output: 1 3 4
//     `,
//   },
//   {
//     question: `Write a C program to check whether a number is Magic Number or not.
//     A magic number is that number whose sum of the digits is when multiplied by the reverse of the same sum results back the original number.

//     example: 1729
//     `,
//   },
// ];

// // start the confetti
// const start = () => {
//   setTimeout(function () {
//     confetti.start();
//   }, 1000);
// };

// //  Stop the confetti
// const stop = () => {
//   setTimeout(function () {
//     confetti.stop();
//   }, 3000);
// };

// // calling the confetti functions
// start();
// stop();

// // To show the loading spinner
// function showTheLoader() {
//   setTimeout(() => {
//     loader.style.opacity = "1";
//   }, 1000);
//   setTimeout(() => {
//     loader.style.opacity = "0";
//   }, 3000);
//   setTimeout(() => {
//     navbar.style.display = "block";
//     homeSection.style.display = "block";
//     clipPath.style.display = "block";
//   }, 3500);
// }

// // To add the backdrop
// function addBackdrop() {
//   backdrop.classList.add("show");
// }

// // to remove the backdrop
// function removeBackdrop() {
//   backdrop.classList.remove("show");
// }

// // To start the timer
// function startTheCounter() {
//   if (seconds === 0 && minutes > 0) {
//     minutes--;
//     seconds = 60;
//   }
//   seconds--;
//   if (minutes === 0 && seconds === 0) {
//     clearInterval(myTimer);
//     examSection.style.display = "none";
//     navbar.style.display = "none";
//     curtain.style.transform = "translateY(0px)";
//     curtain.firstElementChild.innerHTML = `
//     <p class="last-text">👎Your time is Up👎</p>
//     <br />
//     <p class="last-text">📃Results will be Announced Shortly📃</p>
//     <br />
//     `;
//     setTimeout(() => {
//       window.close();
//     }, 5000);
//   }
//   minute.textContent = minutes;
//   second.textContent = seconds;
// }

// // To check for the valid phone number
// function checkNumber(input) {
//   var phoneno = /^\d{10}$/;
//   if (input.match(phoneno)) {
//     phone.classList.remove("danger");
//     phone.classList.add("success");
//     return true;
//   } else {
//     phone.classList.remove("success");
//     phone.classList.add("danger");
//     return false;
//   }
// }

// // To check for valid email
// function checkEmail(input) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     email.classList.remove("danger");
//     email.classList.add("success");
//     return true;
//   } else {
//     email.classList.add("danger");
//     return false;
//   }
// }

// // To check for the valid names
// function validateInputs() {
//   if (firstName.value.trim() === "" && lastName.value.trim() === "") {
//     firstName.classList.add("danger");
//     lastName.classList.add("danger");
//     return false;
//   } else {
//     firstName.classList.remove("danger");
//     firstName.classList.add("success");
//     lastName.classList.remove("danger");
//     lastName.classList.add("success");
//     return true;
//   }
// }

// // To send the user details to the database
// function sendInputToDatabase(fName, lName, email, phone) {
//   fetch(`https://cs-project-demo-default-rtdb.firebaseio.com/${fName}.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       Name: fName + " " + lName,
//       Email: email,
//       PhoneNo: phone,
//     }),
//   });
// }

// // To send the user answers to the datatbase
// function sendAnswerToDatabase(input, fName) {
//   fetch(`https://cs-project-demo-default-rtdb.firebaseio.com/${fName}.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       Question: questionNumber,
//       answer: input,
//     }),
//   });
// }

// // random number generator
// function questionNumberGenerator() {
//   return questionNumberUsed[
//     Math.floor(Math.random() * questionNumberUsed.length)
//   ];
// }

// // To show the next question in the exam container
// function showNextQuestions() {
//   if (questions.length <= questionNumber) {
//     examSection.style.display = "none";
//     navbar.style.display = "none";
//     curtain.style.transform = "translateY(0px)";
//     curtain.firstElementChild.innerHTML = `
//     <p class="last-text">🎉Successfully Completed Mains Exam🎉</p>
//     <br />
//     <p class="last-text">📃Results will be Announced Shortly📃</p>
//     <br />
//     `;
//     start();
//     stop();
//     setTimeout(() => {
//       window.close();
//     }, 6500);
//   } else {
//     randomQuestionNumber = questionNumberGenerator();
//     questionNumberUsed = questionNumberUsed.filter(
//       (e) => e !== randomQuestionNumber
//     );
//     answer.focus();
//     question.innerText = questions[randomQuestionNumber].question;
//     questionNumber += 1;
//   }
// }

// // Event Handlers

// // To prevent Right click
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// // To prevent Keyboard shortcuts
// document.onkeydown = function () {
//   switch (event.keyCode) {
//     case 116: //F5 button
//       event.returnValue = false;
//       event.keyCode = 0;
//       return false;
//     case 82: //R button
//       if (event.ctrlKey) {
//         event.returnValue = false;
//         event.keyCode = 0;
//         return false;
//       } else {
//         return true;
//       }
//     case 123: //F12 button
//       event.returnValue = false;
//       event.keyCode = 0;
//       return false;
//     case 74:
//       if (event.ctrlKey) {
//         event.returnValue = false;
//         event.keyCode = 0;
//         return false;
//       }
//     case 73:
//       if (event.ctrlKey) {
//         event.returnValue = false;
//         event.keyCode = 0;
//         return false;
//       }
//     case 67:
//       if (event.ctrlKey) {
//         event.returnValue = false;
//         event.keyCode = 0;
//         return false;
//       }
//   }
// };

// // To pervent reload and switching windows
// document.addEventListener("visibilitychange", () => {
//   if (document.hidden) {
//     window.close();
//   }
// });

// // To raise the curtain
// window.addEventListener("keypress", (e) => {
//   if (e.key === " " && spaceBarPressed) {
//     spaceBarPressed = false;
//     confetti.stop();
//     showTheLoader();
//     curtain.style.transform = "translateY(-100%)";
//   }
// });

// // To open the sidebar
// openSidebar.addEventListener("click", () => {
//   addBackdrop();
//   sidebar.classList.add("show");
// });

// // To close the sidebar
// closeSidebar.addEventListener("click", () => {
//   removeBackdrop();
//   sidebar.classList.remove("show");
// });

// // To submit the form and send the details to database and show the exam container
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   validateInputs();
//   checkEmail(email);
//   checkNumber(phone.value.trim());
//   if (
//     validateInputs() &&
//     checkEmail(email) &&
//     checkNumber(phone.value.trim())
//   ) {
//     sendInputToDatabase(
//       firstName.value.trim(),
//       lastName.value.trim(),
//       email.value.trim(),
//       phone.value.trim()
//     );
//     homeSection.style.display = "none";
//     clipPath.style.display = "none";
//     examSection.style.display = "block";
//     myTimer = setInterval(() => {
//       startTheCounter();
//     }, 1000);
//   }
// });

// // To check if any answer is given by the user
// answer.addEventListener("input", (e) => {
//   if (e.target.value === "") {
//     nextBtn.disabled = true;
//   } else {
//     nextBtn.disabled = false;
//   }
// });

// // To submit the current answer and go to the next question
// nextBtn.addEventListener("click", () => {
//   sendAnswerToDatabase(answer.value, firstName.value.trim());
//   question.innerText = "";
//   answer.value = "";
//   nextBtn.disabled = true;
//   showNextQuestions();
// });

// // Function calls
// showNextQuestions();

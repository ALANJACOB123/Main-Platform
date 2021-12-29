const curtain = document.getElementById("curtain");
const navbar = document.getElementById("navbar");
const openSidebar = document.getElementById("open");
const closeSidebar = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");
const submitBtn = document.getElementById("submit-btn");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const homeSection = document.getElementById("home-section");
const clipPath = document.getElementById("clip-path");
const examSection = document.getElementById("exam-section");
const answer = document.getElementById("answer");
const question = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

let spaceBarPressed = true;
let minutes = 60;
let seconds = 00;
minute.textContent = minutes;

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

document.onkeydown = function () {
  switch (event.keyCode) {
    case 116: //F5 button
      event.returnValue = false;
      event.keyCode = 0;
      return false;
    case 82: //R button
      if (event.ctrlKey) {
        event.returnValue = false;
        event.keyCode = 0;
        return false;
      }
      else{
        return true;
      }
    case 123: //F12 button
      event.returnValue = false;
      event.keyCode = 0;
      return false;
    case 74:
      if (event.ctrlKey) {
        event.returnValue = false;
        event.keyCode = 0;
        return false;
      }
    case 73:
      if (event.ctrlKey) {
        event.returnValue = false;
        event.keyCode = 0;
        return false;
      }
  }
};

// document.addEventListener("visibilitychange", () => {
//   if (document.hidden) {
//     window.close();
//   }
// });

// start

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 3000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

start();
stop();

function showTheLoader() {
  setTimeout(() => {
    loader.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    loader.style.opacity = "0";
  }, 3000);
  setTimeout(() => {
    navbar.style.display = "block";
    homeSection.style.display = "block";
    clipPath.style.display = "block";
  }, 3500);
}

window.addEventListener("keypress", (e) => {
  if (e.key === " " && spaceBarPressed) {
    spaceBarPressed = false;
    confetti.stop();
    showTheLoader();
    curtain.style.transform = "translateY(-100%)";
  }
});

answer.focus();
let questionNumber = 0;

const questions = [
  {
    question: `Write a program in C to convert given number of days in terms of Years, Months and  Days
      
      For example:-

      Enter the number of days :- 560
      1 year
      6 months
      15 days
      `,
  },
  {
    question: "Hello2",
  },
  {
    question: "Hello3",
  },
  {
    question: `Write a C program to print the left view of binary tree
    
      Given a Binary Tree, print left view of it. Left view of a Binary Tree is set of nodes visible when tree is visited from left side.

      For example :-

      input: 
          ____1
         ___/ \\
        __2__3
       _/_\\ 
      3__4
      
      Output: 1 2 3
    `,
  },
  {
    question: `Write a program in C to print the given pattern
      
      The pattern to be printed:-

      ******
      *****
      ****
      ***
      **
      *
      * 
      **
      ***
      ****
      *****
      ******
    `,
  },
];

function addBackdrop() {
  backdrop.classList.add("show");
}

function removeBackdrop() {
  backdrop.classList.remove("show");
}

openSidebar.addEventListener("click", () => {
  addBackdrop();
  sidebar.classList.add("show");
});

closeSidebar.addEventListener("click", () => {
  removeBackdrop();
  sidebar.classList.remove("show");
});

function startTheCounter() {
  if (seconds === 0 && minutes > 0) {
    minutes--;
    seconds = 60;
  }
  seconds--;
  if (minutes === 0 && seconds === 0) {
    clearInterval(myTimer);
    examSection.style.display = "none";
    navbar.style.display = "none";
    curtain.style.transform = "translateY(0px)";
    curtain.firstElementChild.innerHTML = `
    <p class="last-text">👎Your time is Up👎</p>
    <br />
    <p class="last-text">📃Results will be Announced Shortly📃</p>
    <br />
    `;
    setTimeout(() => {
      window.close();
    }, 5000);
  }
  minute.textContent = minutes;
  second.textContent = seconds;
}

function checkNumber(input) {
  var phoneno = /^\d{10}$/;
  if (input.match(phoneno)) {
    phone.classList.remove("danger");
    phone.classList.add("success");
    return true;
  } else {
    phone.classList.remove("success");
    phone.classList.add("danger");
    return false;
  }
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    email.classList.remove("danger");
    email.classList.add("success");
    return true;
  } else {
    email.classList.add("danger");
    return false;
  }
}

function validateInputs() {
  if (firstName.value.trim() === "" && lastName.value.trim() === "") {
    firstName.classList.add("danger");
    lastName.classList.add("danger");
    return false;
  } else {
    firstName.classList.remove("danger");
    firstName.classList.add("success");
    lastName.classList.remove("danger");
    lastName.classList.add("success");
    return true;
  }
}

function sendInputToDatabase(fName, lName, email, phone) {
  fetch(`https://cs-project-demo-default-rtdb.firebaseio.com/${fName}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: fName + " " + lName,
      Email: email,
      PhoneNo: phone,
    }),
  });
}

function sendAnswerToDatabase(input, fName) {
  fetch(`https://cs-project-demo-default-rtdb.firebaseio.com/${fName}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Question: questionNumber,
      answer: input,
    }),
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateInputs();
  checkEmail(email);
  checkNumber(phone.value.trim());
  if (
    validateInputs() &&
    checkEmail(email) &&
    checkNumber(phone.value.trim())
  ) {
    sendInputToDatabase(
      firstName.value.trim(),
      lastName.value.trim(),
      email.value.trim(),
      phone.value.trim()
    );
    homeSection.style.display = "none";
    clipPath.style.display = "none";
    examSection.style.display = "block";
    myTimer = setInterval(() => {
      startTheCounter();
    }, 1000);
  }
});

function showNextQuestions() {
  if (questions.length <= questionNumber) {
    examSection.style.display = "none";
    navbar.style.display = "none";
    curtain.style.transform = "translateY(0px)";
    curtain.firstElementChild.innerHTML = `
    <p class="last-text">🎉Successfully Completed Mains Exam🎉</p>
    <br />
    <p class="last-text">📃Results will be Announced Shortly📃</p>
    <br />
    `;
    start();
    stop();
    setTimeout(() => {
      window.close();
    }, 6500);
  } else {
    answer.focus();
    question.innerText = questions[questionNumber].question;
    questionNumber += 1;
  }
}

answer.addEventListener("input", (e) => {
  if (e.target.value === "") {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
});

nextBtn.addEventListener("click", () => {
  sendAnswerToDatabase(answer.value, firstName.value.trim());
  question.innerText = "";
  answer.value = "";
  showNextQuestions();
});

showNextQuestions();

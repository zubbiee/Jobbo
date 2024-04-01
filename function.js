function updateTextInput(val) {
  document.getElementById("textInput").value = val;
}
//for the worker settings page

//for the aside buttons
let currentElement = null;

function showElement(id) {
  if (currentElement) {
    currentElement.classList.add("hidden");
  }

  const element = document.getElementById(id);
  element.classList.remove("hidden");
  currentElement = element;
}

//to make the dark mode toggle button-visible
function togSlide1() {
  const darkmode = document.getElementById("darkmain");
  if (darkmode.style.display === "none") {
    darkmode.style.display = "block";
  } else {
    darkmode.style.display = "none";
  }
}

//using the toggle button to change background color

// if (overlay.classList.contains("hidden"))

const toggleSwitch = document.getElementById("togbtn1");
const worksetpage = document.getElementById("bodyworkset");
if (toggleSwitch.checked) {
  worksetpage.classList.add("dark-mode");
} else {
  worksetpage.classList.remove("dark-mode");
}

//for the user settings page

//to make the dark mode toggle button-visible
function togSlide() {
  const darkmode = document.getElementById("darkmaintwo");
  if (darkmode.style.display === "none") {
    darkmode.style.display = "block";
  } else {
    darkmode.style.display = "none";
  }
}

//using the toggle button to change background color
const togBtn2 = document.getElementById("togbtn2");
const userSetPage = document.getElementById("usersetpage");

togBtn2.addEventListener("change", function () {
  if (this.checked) {
    userSetPage.style.backgroundColor = "#00171F";
    userSetPage.style.color = "white";
  } else {
    userSetPage.style.backgroundColor = "white";
  }
});

/*
making the accept button unclickable till 
the checkbox is checked on login phase
*/

function enable() {
  const checkbox = document.getElementById("myCheckbox");
  const button = document.getElementById("myButton");
  if (checkbox.checked) {
    button.removeAttribute("disabled");
  } else {
    button.disabled = "true";
  }
}
function enablelink() {
  window.location.href = "pre-signinpage.html";
}
/*
making the accept button unclickable till 
the checkbox is checked on pre login phase
*/
function enabled() {
  const chekkbox = document.getElementById("myChekkbox");
  const buttons = document.getElementById("myButtonpre");
  if (chekkbox.checked) {
    buttons.removeAttribute("disabled");
  } else {
    buttons.disabled = "true";
  }
}

/*
making the create account
 button unclickable till 
the checkbox is checked on pre login phase
*/

function enabled() {
  const chekkbox = document.getElementById("myChekkbox");
  const buttons = document.getElementById("myButtonpre");
  if (chekkbox.checked) {
    buttons.removeAttribute("disabled");
  } else {
    buttons.disabled = "true";
  }
}

//function to review worker on worker's profile
function bud() {
  // const review = document.getElementById("reviewlink");
  const overlay = document.getElementById("overlay");
  const budding = document.getElementById("budding");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (budding.classList.contains("hidden")) {
    budding.classList.remove("hidden");
  } else {
    budding.classList.add("hidden");
  }
}

//function to review worker on worker's profile
function repo() {
  // const review = document.getElementById("reviewlink");
  const overlay = document.getElementById("overlay");
  const report = document.getElementById("frame201h");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (report.classList.contains("hidden")) {
    report.classList.remove("hidden");
  } else {
    report.classList.add("hidden");
  }
}

//function for message worker interface

function msgworker() {
  // const review = document.getElementById("reviewlink");
  const overlay = document.getElementById("overlay");
  const msgwork = document.getElementById("msghid");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (msgwork.classList.contains("hidden")) {
    msgwork.classList.remove("hidden");
  } else {
    msgwork.classList.add("hidden");
  }
}

//function for hire worker interface

function hireworker() {
  // const review = document.getElementById("reviewlink");
  const overlay = document.getElementById("overlay");
  const hirework = document.getElementById("paymain");
  // const closeBox = document.getElementById("closebox");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (hirework.classList.contains("hidden")) {
    hirework.classList.remove("hidden");
  } else {
    hirework.classList.add("hidden");
  }
  // if (closeBox.classList.contains("hidden")) {
  //   closeBox.classList.remove("hidden");
  // } else {
  //   closeBox.classList.add("hidden");
  // }
}

//function for the payment methods

function debit() {
  const debitInput = document.getElementById("debtin");
  const debitCard = document.getElementById("main96");
  const frameDcard = document.getElementById("hide9696");

  if (debitInput.checked) {
    frameDcard.classList.remove("hidden");
    debitCard.style.backgroundColor = "#dde5ef";
  } else {
    frameDcard.classList.add("hidden");
    debitCard.style.backgroundColor = "white";
  }
  // debitInput.addEventListener("change", debit);
  // debit();
}

function bank() {
  const bankInput = document.getElementById("bankinput");
  const accNo = document.getElementById("main97");
  const frameAcc = document.getElementById("frame9797hid");

  if (bankInput.checked) {
    frameAcc.classList.remove("hidden");
    accNo.style.backgroundColor = "#dde5ef";
  } else {
    frameAcc.classList.add("hidden");
    accNo.style.backgroundColor = "white";
  }
}

function close() {
  const overlay = document.getElementById("overlay");
  const closeBox = document.getElementById("closebox");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

//function to open the flutter payment gateway
function pay() {
  // const overlay = document.getElementById("overlay");
  const paymain = document.getElementById("paymain");
  const flutter = document.getElementById("flutt");

  const fluttin = document.getElementById("fluttin");
  const successPop = document.getElementById("succespop");
  const loadPop = document.getElementById("loadpop");

  if (flutter.classList.contains("hidden") && fluttin.checked) {
    flutter.classList.remove("hidden");
  } else {
    flutter.classList.add("hidden");
    // loadPop.classList.remove("hidden");
    function showElements() {
      flutter.classList.add("hidden");
      loadPop.classList.remove("hidden");
      setTimeout(function () {
        loadPop.classList.add("hidden");
        // if (remCard.checked) {
        //   successPop.classList.remove("hidden");
        // } else {
        //   errorPop.classList.remove("hidden");
        // }
        successPop.classList.remove("hidden");
      }, 2000); // Change 2000 to the desired delay in milliseconds (2 seconds in this example)
    }

    showElements();
  }

  if (paymain.classList.contains("hidden")) {
    paymain.classList.remove("hidden");
  } else {
    paymain.classList.add("hidden");
  }
}

//function for report exit button
function payd() {
  const overlay = document.getElementById("overlay");
  const h201 = document.getElementById("frame201h");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (h201.classList.contains("hidden")) {
    h201.classList.remove("hidden");
  } else {
    h201.classList.add("hidden");
  }
}

//function for exiting review worker button

function budexit() {
  const overlay = document.getElementById("overlay");
  const budding = document.getElementById("budding");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (budding.classList.contains("hidden")) {
    budding.classList.remove("hidden");
  } else {
    budding.classList.add("hidden");
  }
}

//function for exiting chat worker button

function chatexit() {
  const overlay = document.getElementById("overlay");
  const msgwork = document.getElementById("msghid");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (msgwork.classList.contains("hidden")) {
    msgwork.classList.remove("hidden");
  } else {
    msgwork.classList.add("hidden");
  }
}

//function for exiting flutter payment

function fluttexit() {
  const overlay = document.getElementById("overlay");
  const fluttcancel = document.getElementById("flutt");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (fluttcancel.classList.contains("hidden")) {
    fluttcancel.classList.remove("hidden");
  } else {
    fluttcancel.classList.add("hidden");
  }
}

//function for exiting payment summary

function payexit() {
  const overlay = document.getElementById("overlay");
  const paymain = document.getElementById("paymain");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (paymain.classList.contains("hidden")) {
    paymain.classList.remove("hidden");
  } else {
    paymain.classList.add("hidden");
  }
}

/*
making the error, success and other popups
appear when due
*/
// document.getElementById("paybtn").addEventListener("click", function () {
//   const remCard = document.getElementById("remcard");
//   const loadPop = document.getElementById("loadpop");
//   const successPop = document.getElementById("successpop");
//   const errorPop = document.getElementById("errorpop");

//   // Function to show element1 for a while and then show element2 or element3 based on checkbox state
//   function showElements() {
//     loadPop.classList.remove("hidden");
//     setTimeout(function () {
//       loadPop.classList.add("hidden");
//       if (remCard.checked) {
//         successPop.classList.remove("hidden");
//       } else {
//         errorPop.classList.remove("hidden");
//       }
//     }, 2000); // Change 2000 to the desired delay in milliseconds (2 seconds in this example)
//   }

//   showElements();
// });

function paypop() {
  const remCard = document.getElementById("remcard");
  const loadPop = document.getElementById("loadpop");
  const successPop = document.getElementById("succespop");
  const errorPop = document.getElementById("erropop");
  const flutter = document.getElementById("flutt");

  // if (loadPop.classList.contains("hidden")) {
  //   loadPop.classList.remove("hidden");
  // } else {
  //   loadPop.classList.add("hidden");
  // }

  // if (flutter.classList.contains("hidden")) {
  //   flutter.classList.remove("hidden");
  // } else {
  //   flutter.classList.add("hidden");
  // }

  // Function to show element1 for a while and then show element2 or element3 based on checkbox state
  function showElements() {
    flutter.classList.add("hidden");
    loadPop.classList.remove("hidden");
    setTimeout(function () {
      loadPop.classList.add("hidden");
      if (remCard.checked) {
        successPop.classList.remove("hidden");
      } else {
        errorPop.classList.remove("hidden");
      }
    }, 2000); // Change 2000 to the desired delay in milliseconds (2 seconds in this example)
  }

  showElements();
}

//function for exiting payment success popup

function succexit() {
  // const overlay = document.getElementById("overlay");
  const paysumcon = document.getElementById("paysumcon");

  const succan = document.getElementById("succespop");

  // if (overlay.classList.contains("hidden")) {
  //   overlay.classList.remove("hidden");
  // } else {
  //   overlay.classList.add("hidden");
  // }

  if (succan.classList.contains("hidden")) {
    succan.classList.remove("hidden");
  } else {
    succan.classList.add("hidden");
  }

  if (paysumcon.classList.contains("hidden")) {
    paysumcon.classList.remove("hidden");
  } else {
    paysumcon.classList.add("hidden");
  }
}

//function to exit download receipt

function paysumexit() {
  const overlay = document.getElementById("overlay");
  const paysumcon = document.getElementById("paysumcon");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (paysumcon.classList.contains("hidden")) {
    paysumcon.classList.remove("hidden");
  } else {
    paysumcon.classList.add("hidden");
  }
}

//function to exit chat jobbo on userfaq

function jobboexit() {
  const overlay = document.getElementById("overlay");
  const chatjob = document.getElementById("chatjob");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (chatjob.classList.contains("hidden")) {
    chatjob.classList.remove("hidden");
  } else {
    chatjob.classList.add("hidden");
  }
}

//function for exiting payment failed popup

function errexit() {
  const overlay = document.getElementById("overlay");
  const erro = document.getElementById("erropop");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (erro.classList.contains("hidden")) {
    erro.classList.remove("hidden");
  } else {
    erro.classList.add("hidden");
  }
}

//function to chat with jobbo interface
function chatjobb() {
  // const overlay = document.getElementById("overlay");
  const overlay = document.getElementById("overlay");
  const chatjobbo = document.getElementById("chatjob");

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  if (chatjobbo.classList.contains("hidden")) {
    chatjobbo.classList.remove("hidden");
  } else {
    chatjobbo.classList.add("hidden");
  }
}

/*
function to determine which pages loads
based on raion input checked on pre-chooseaccount
*/

function redirectSignUp() {
  const radiochoose1 = document.getElementById("radiochoose1");

  const radiochoose2 = document.getElementById("radiochoose2");

  if (radiochoose1.checked) {
    window.location.href = radiochoose1.value;
  } else if (radiochoose2.checked) {
    window.location.href = radiochoose2.value;
  }
}

//function that taks user to previous page
function goBack() {
  window.history.back();
}

//userslider
// const slides = document.querySelectorAll('.slick');
// let currentSlide = 0;

// function showSlide() {
//   slides.forEach((slide, index) => {
//     if (index === currentSlide) {
//       slide.classList.add('activer');
//     } else {
//       slide.classList.remove('activer');
//     }
//   });
// }

// setInterval(() => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide();
// }, 3000);

//function for save button on worker dashboard
function savede() {
  window.location.href = "workerinfo.html";
}

//function to navigate to worker dashboard from worker info page

// function navigateAndShow() {
//   const dash = document.getElementById("dash-over");

//   window.location.href = "workerdashboard.html";
//   // document.getElementById("dash-over").style.display = "block";

//   if (dash.classList.contains("hidden")) {
//     dash.classList.remove("hidden");
//   } else {
//     dash.classList.add("hidden");
//   }
// }

// document.getElementById("navebtn").addEventListener("click", function () {
//   // Navigate to a new page (replace 'page-url' with the actual URL)
//   window.location.href = "workerdashboard.html";

//   // Show the hidden element
//   document.getElementById("dashover").style.display = "block";
// });

// function navigateAndShow() {
//   // const dash = document.getElementById("dashover");

//   window.location.href = "workerdashboard.html";
//   document.getElementById("dashover").style.display = "block";

//   // if (dash.classList.contains("hidden")) {
//   //   dash.classList.remove("hidden");
//   // } else {
//   //   dash.classList.remove("hidden");
//   // }
// }

// function navigateAndShow() {
//   window.location.href = "workerdashboard.html";

//   setTimeout(function () {
//     document.getElementById("dashover").classList.remove("hidden");
//   }, 3000);
// }

// function navigateAndShow() {
//   window.location.href = "workerdashboard.html";
// }

// window.addEventListener("load", function () {
//   const dashover = this.document.getElementById("dashover");
//   dashover.className = "";
// });

function navigateToPage() {
  // Redirect to the desired page
  window.location.href = "userhomedecor.html";
}
function navigateToPages() {
  // Redirect to the desired page
  window.location.href = "pre-homedecor.html";
}

function toggleVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

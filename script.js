"use strict";

//for navigation
const menu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-btn");
const nav = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  nav.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  nav.style.display = "none";
});

// for feature Section
const featureTab = document.querySelectorAll(".feature-tab");

featureTab.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    featureTab.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });

    toggle.classList.toggle("active");

    const tabId = toggle.parentNode.getAttribute("data-target");
    const featureContent = document.querySelectorAll(".feature-content");
    const changeTab = document.querySelector(`.${tabId}`);

    featureContent.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });

    changeTab.classList.toggle("active");
  });
});

// for faq section
const btn = document.querySelectorAll(".accordion");

btn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
});

// for email validation
const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Whoops, make sure it's an email");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "error-control error";
  small.textContent = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "error-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

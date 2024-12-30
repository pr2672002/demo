document.addEventListener("DOMContentLoaded", function () {
  // Handling form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataSerialized = Object.fromEntries(formData.entries());
    console.log(formDataSerialized); // Here you can send the form data to the backend or do other operations
    form.reset(); // Reset the form after submission
  });
});
//
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

//   popup
document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.querySelector(".open-popup-btn");
  const closePopupBtn = document.querySelector(".close-popup-btn");
  const popupContainer = document.querySelector(".popup-container");

  openPopupBtn.addEventListener("click", function () {
    popupContainer.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });
});

//


    // script.js

// Function to handle login form submission
function handleLogin() {
  const email = document.querySelector('.login-box .email').value;
  const password = document.querySelector('.login-box .password').value;

  // Construct login data object
  const loginData = {
      email: email,
      password: password
  };

  // Send login data to backend using AJAX
  fetch('http://localhost:3000/login-endpoint', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData) // Use the loginData object
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Handle successful login response (e.g., redirect user)
      console.log('Login successful:', data);
  })
  .catch(error => {
      console.error('There was a problem with the login:', error);
      // Optionally, display an error message to the user
  });
}

// Function to handle signup form submission
function handleSignup() {
  const fullName = document.getElementById('first').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;

  // Construct signup data object
  const signupData = {
      fullName: fullName,
      email: email,
      dob: dob,
      password: password
      // Add other form fields as needed
  };

  // Send signup data to backend using AJAX
  fetch('http://localhost:3000/signup-endpoint', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupData) // Use the signupData object
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Handle successful signup response (e.g., show success message)
      console.log('Signup successful:', data);
  })
  .catch(error => {
      console.error('There was a problem with the signup:', error);
      // Optionally, display an error message to the user
  });
}

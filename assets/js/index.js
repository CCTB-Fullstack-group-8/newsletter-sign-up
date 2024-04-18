const mainForm = document.querySelector('form');
const headerSection = document.querySelector('header');
const formSection = document.querySelector('section');
const successMessage = document.querySelector('.success-section');
const container = document.querySelector('.container');
const emailInput = document.querySelector('.email-form');
const successEmail = document.querySelector('.success-section .email');
const dismissButton = document.querySelector('.dismiss-button');

mainForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    handleFormSubmission(email);
  } else {
    displayError();
  }
});

function validateEmail(email) {
  // Simple email validation regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function handleFormSubmission(email) {
  displaySuccess(email);
}

function displayError() {
  const errorSpan = document.querySelector('.error');
  errorSpan.style.display = 'block';
}

function displaySuccess(email) {
  // Show the entered email on the success page
  successEmail.textContent = email;
  formSection.style.display = 'none';
  headerSection.style.display = 'none';
  successMessage.style.display = 'block';
  container.style.display = 'none';
}

dismissButton.addEventListener('click', function() {
  // Return to the home page when the user clicks on "Dismiss Message"
  formSection.style.display = 'block';
  headerSection.style.display = 'block';
  successMessage.style.display = 'none';
  container.style.display = 'block';
});

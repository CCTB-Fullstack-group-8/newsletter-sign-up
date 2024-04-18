const mainForm = document.querySelector('form');
const headerSection = document.querySelector('header');
const formSection = document.querySelector('section');
const successMessage = document.querySelector('.success-section');
const container = document.querySelector('.container');

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  handleFormSubmission();
  
});

function handleFormSubmission() {
  displaySuccess();
}

function displaySuccess() {
  formSection.style.display = 'none';
  headerSection.style.display = 'none';
  successMessage.style.display = 'block';
  container.style.display = 'none';
}

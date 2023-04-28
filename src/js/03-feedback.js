import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

fillInputFields();

function onFormInput(e) {
  const formData = { email: refs.email.value, message: refs.message.value };

  const formDataStringified = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataStringified);
}

function onFormSubmit(e) {
  e.preventDefault();

  const formDataSubmit = {
    email: refs.email.value,
    message: refs.message.value,
  };
  console.log(formDataSubmit);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillInputFields() {
  const dataToFill = localStorage.getItem(STORAGE_KEY);
  const dataToFillParced = JSON.parse(dataToFill);

  if (dataToFill) {
    refs.email.value = dataToFillParced.email;
    refs.message.value = dataToFillParced.message;
  }
}

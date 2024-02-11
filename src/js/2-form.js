const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedState) {
  form.elements.email.value = savedState.email?.trim() || '';
  form.elements.message.value = savedState.message?.trim() || '';
}

form.addEventListener('input', event => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue && messageValue) {
    
    const formData = {
      email: emailValue,
      message: messageValue,
    };

     console.log(formData);

    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    
    alert('Будь ласка, заповніть обидва поля перед відправкою форми.');
   }
});


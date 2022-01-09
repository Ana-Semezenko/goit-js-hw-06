const textInput = document.getElementById('validation-input');
const lengthValue = textInput.dataset.length;

textInput.addEventListener('focus', onFocusInput);
textInput.addEventListener('blur', onBlurInput);

function onFocusInput(e) {
   
};

function onBlurInput(e) {
   if(e.currentTarget.value.length == lengthValue){
      e.currentTarget.classList.remove('invalid');
      e.currentTarget.classList.add('valid');
   } else {
      e.currentTarget.classList.remove('valid');
      e.currentTarget.classList.add('invalid');
   }
};
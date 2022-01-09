const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
};


function addText(e) {
    refs.textOutput.textContent = e.currentTarget.value;
    if (refs.textOutput.textContent.length === 0) {
    refs.textOutput.textContent = 'Anonymous'
    }
};

refs.textInput.addEventListener('input', addText);



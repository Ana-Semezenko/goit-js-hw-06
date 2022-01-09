let counterValue = 0;

const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};


const updateValue = (num) => {
    counterValue += num;
    refs.value.textContent = counterValue;
};

refs.decrement.addEventListener('click', () => updateValue(-1));
refs.increment.addEventListener('click', () => updateValue(+1));
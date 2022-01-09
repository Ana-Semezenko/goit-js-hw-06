const refs = {
    sizeInput: document.getElementById('font-size-control'),
    textInfo: document.getElementById('text'),
};


refs.sizeInput.addEventListener("input", (e) => {
    const { value } = e.target;
    refs.textInfo.style.fontSize = `${value}px`;
});

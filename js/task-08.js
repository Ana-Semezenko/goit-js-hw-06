const infoForm = document.querySelector(".login-form");



infoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formElement = e.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;

    const data = {
        email,
        password,
    };

    if (email === "" || password === "") {
        return window.alert("Please, fill in all the fields!");
    }
    console.log(data);
    infoForm.reset();
});


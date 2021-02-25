let form = document.getElementById('form');

let emailel = document.getElementById('email');
let emailerrel = document.getElementById('emailErrMsg');

let passel = document.getElementById('password');
let passerrel = document.getElementById('passwordErrMsg');

let formData = {
    email: "",
    password: "",
};

emailel.addEventListener("change", function(event) {
    emailerrel.textContent = event.target.value === "" ? "Required*" : "";
    formData.email = event.target.value;
});

passel.addEventListener("change", function(event) {
    passerrel.textContent = event.target.value === "" ? "Required*" : "";
    formData.password = event.target.value;
});

function validateForm(formData) {
    let {
        email,
        password
    } = formData;
    emailerrel.textContent = email === "" ? "Required*" : "";
    passerrel.textContent = password === "" ? "Required*" : "";

}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm(formData);
});
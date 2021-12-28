const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");

const expresions = {
  notEmpty: /(.|\s)*\S(.|\s)*/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  inputs.forEach((input) => {
    const regex = input.dataset.regex;

    switch (regex) {
      case "notEmpty":
        validateField(input, expresions[regex]);
        break;
      case "email":
        customValidEmail(input, expresions.email);
        break;
    }
  });
};

const validateField = (field, regex) =>
  regex.test(field.value)
    ? field.classList.remove("form__input--invalid")
    : field.classList.add("form__input--invalid");

const customValidEmail = (field, regex) => {
  if (regex.test(field.value)) {
    field.placeholder = "Email Address";
    field.classList.remove("form__input--invalid");
    field.classList.remove("form__input--placeholder-red");
  } else {
    field.value = "";
    field.classList.add("form__input--placeholder-red");
    field.placeholder = "email@example.com";
    field.classList.add("form__input--invalid");
  }
};

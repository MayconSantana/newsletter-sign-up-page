//Select elements
const box = document.querySelector('.box');
const sucess_box = document.querySelector('.sucess-box');
const btn = document.querySelector('.btn');
const btn_sucess = document.querySelector('.btn-sucess');
const emailInput = document.querySelector('#email');
const labelEmailInput = document.querySelector(".validEmail");

//Functions
const validInput = (input, label) => {
    input.classList.add("inputError");
    label.classList.add("validEmail")
    label.classList.remove("hide");
}

const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

const resetInput = () => {

}

//Events
btn.addEventListener("click", () => {
    if(emailInput.value === '' || validarEmail(emailInput.value) == false){
        validInput(emailInput, labelEmailInput);
    }else{
        box.classList.toggle("hide");
        sucess_box.classList.toggle("hide");
    }
})

btn_sucess.addEventListener('click', () => {
    box.classList.toggle("hide");
    sucess_box.classList.toggle("hide");

    location.reload();
})
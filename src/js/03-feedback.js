import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}
const saveData = {
};
const STORAGE_KEY = "feedback-form-state";
console.log(refs.textarea)
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onFormInput, 500));
refs.textarea.addEventListener('input', throttle(onFormTextarea, 500));



function onFormInput(e) {
    let email = e.target.value;
    saveData.email = email;
    console.log(email)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))

}
    
function onFormSubmit(e) {
    e.preventDefault();
    const finishValues = localStorage.getItem(STORAGE_KEY)
    if (finishValues) {
        const finishValuesPars = JSON.parse(finishValues);
        console.log(finishValuesPars)
    }
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
}

function onFormTextarea(e) {
    let massage = e.target.value;
    console.log(massage)
    saveData.massage = massage;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))
}

function getDataFromLocalStorege() {   
    const values = localStorage.getItem(STORAGE_KEY)
    if (values) {
        const valuesPars = JSON.parse(values);
        refs.input.value = valuesPars.email;
        refs.textarea.value = valuesPars.massage;
    }
    
}

getDataFromLocalStorege();
import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEY = "feedback-form-state";
console.log(refs.textarea)
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onFormInput, 1000));
refs.textarea.addEventListener('input', throttle(onFormTextarea,1000));

const saveData = {
};

function onFormInput(e) {
    const email = e.currentTarget.value;
    saveData.email = email;
    // console.log(saveData.email)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))

}
    
function onFormSubmit(e) {
    e.preventDefault();
    const finishValues = localStorage.getItem(STORAGE_KEY)
    const finishValuesPars = JSON.parse(finishValues);
    console.log(finishValuesPars)
  
    localStorage.removeItem(STORAGE_KEY);
     refs.input.value = "";
    refs.textarea.value = "";
}

function onFormTextarea(e) {
    
    const massage = e.currentTarget.value;
    saveData.massage = massage;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))
}

function getDataFromLocalStorege() {
    
    const values = localStorage.getItem(STORAGE_KEY)
    if (values) {
        const valuesPars = JSON.parse(values);
    console.log(values)
    console.log(valuesPars)

    refs.input.value = valuesPars.email;
    refs.textarea.value = valuesPars.massage;
    }
    
}

getDataFromLocalStorege();

function generateColour() {
    let hue = Math.floor(Math.random()*360);
    let sat = 90;
    let light = 60;

    let hslVal = `hsl(${hue}, ${sat}%, ${light}%)`;
    return hslVal
}

function validateForm(formNameInput, formDescInput) {
    let taskNameInput = formNameInput.value.trim();
    let taskDescInput = formDescInput.value.trim();
    
    if (taskNameInput === '') {
        if (formNameInput.parentElement.classList.contains('success')){
            formNameInput.parentElement.classList.remove('success');
        }
        taskName.parentElement.classList.add('error');
    } else {
        if (formNameInput.parentElement.classList.contains('error')){
            formNameInput.parentElement.classList.remove('error');
        }
        formNameInput.parentElement.classList.add('success')
    }

    if (taskDescInput === '') {
        if (formDescInput.parentElement.classList.contains('success')){
            formDescInput.parentElement.classList.remove('success');
        }
        formDescInput.parentElement.classList.add('error');
    } else {
        if (formDescInput.parentElement.classList.contains('error')){
            formDescInput.parentElement.classList.remove('error');
        }
        formDescInput.parentElement.classList.add('success')
    }

    if (taskNameInput !== '' && taskDescInput !== '') {
        return true
    }
}

export { generateColour, validateForm }
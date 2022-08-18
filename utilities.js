function getInputValueById (InputField){
    const InputFieldValue = document.getElementById(InputField);
    const InputFieldValueString = InputFieldValue.value;
    // const InputValue = parseFloat(InputFieldValueString);
    InputFieldValue.value = '';
    return InputFieldValueString;
}

function getElementValueById (element){
    const elements = document.getElementById(element);
    const elmentValueString = elements.innerText;
    const elementValue = parseFloat(elmentValueString);
    return elementValue;
}

function setTextElementById(elementID, newvalue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newvalue;
}
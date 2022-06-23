// get element by id 
function element(elementId) {
    return document.getElementById(elementId);
}

// get input field value from funtion
function getInputValue(inputFieldId) {
    // get input value 
    const inputValue = element(inputFieldId).value;
    // check isNaN 
    if (isNaN(inputValue)) {
        document.getElementById('error-message').innerText = " Please Check " + inputFieldId + ". It's a NaN.";
        return -1;
    }
    else if (inputValue < 1) {   // check It's positive or negative
        document.getElementById('error-message').innerText = " Please Check " + inputFieldId + ". It's a negative value.";
        return -1;
    }

    return parseFloat(inputValue);
}
// get sum values 
function addNumbers(number) {
    let result = 0;
    for (const num of arguments) {
        result += num;
    }
    return result;
}

// set input value 
function setInputValue(inputFieldId, value) {
    element(inputFieldId).value = value;
}
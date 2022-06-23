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
// set innerText 
function setInnerText(setFieldId, setValue) {
    document.getElementById(setFieldId).innerText = setValue;
}
// get innerText 
function getInnerText(getFieldId) {
    return document.getElementById(getFieldId).innerText;
}
// calculate saving 
function savingCalculate(blance, saving) {
    return (blance * saving) / 100;
}


// event generate by calculate-btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    // get input value  from income , food , rent , clothes
    const incomeBlance = getInputValue('inputIncome');
    const foodCost = getInputValue('inputFood');
    const rentCost = getInputValue('inputRent');
    const clothesCost = getInputValue('inputClothes');
    // document.getElementById('error-message').innerText = "Please Check ";
    // add total cost 
    const totalCost = addNumbers(foodCost, rentCost, clothesCost);
    // calculate blance 
    const blance = incomeBlance - totalCost;
    // error message div element 
    const failError = element('blance-influence-message');
    // get save button element 
    const saveButton = document.getElementById('save-button');
    // check total cost , negative value & NaN 
    if ((totalCost > incomeBlance) || (incomeBlance == -1 || foodCost == -1 || rentCost == -1 || clothesCost == -1)) {
        // error show 
        failError.style.display = 'block';
        // set total-expense & blance inner text 0
        setInnerText('total-expense', 0);
        setInnerText('blance', 0);
        // save button disabled 
        saveButton.disabled = true;
    }

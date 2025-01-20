
//PREPARATION PHASE

//associate variables on js from html
let btnGenerate = document.getElementById("generateButton");
let inputAge = document.getElementById("nameInput");
let inputKmNumber = document.getElementById("kilometerInput")
let InputAgeSelect = document.getElementById("ageselect");
let resultHtml = document.getElementById("result")




//MAIN PHASE
//let's do a function to calculate the price from age and KmNumber
function calc(numberKm, numberAgeSelect) {


    numberKm = numberKm.value;

    numberAgeSelect = numberAgeSelect.value;

    let price = numberKm * 0.21

    if (numberAgeSelect == 1) {

        return price = price - (price * 0.2);

    }

    else if (numberAgeSelect == 3) {

        return price = price - (price * 0.4);

    }

    else {

        return price = price;

    }
}

//let's put the function calc inside the adeventlistener trough the button

btnGenerate.addEventListener("click", function () {


    resultHtml.innerHTML = `il prezzo del tuo biglietto è ${calc(inputKmNumber, InputAgeSelect).toFixed(2)}`;

})












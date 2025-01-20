
//PREPARATION PHASE

//associate variables on js from html
let btnGenerate = document.getElementById("generateButton");
let inputKmNumber = document.getElementById("kilometerInput")
let inputAgeSelect = document.getElementById("ageselect");
let inputNameHtml = document.getElementById("nameInput");

let resultName = document.getElementById("name");
let resultHtml = document.getElementById("resultTicket");
let routeHtml = document.getElementById("route");
let cpCodeHtml = document.getElementById("cpCode");
let saleHtml = document.getElementById("sale");







//MAIN PHASE
//let's do a function to calculate the price from age and KmNumber
function calc(numberKm, numberAgeSelect) {

    numberKm = numberKm.value;

    numberAgeSelect = numberAgeSelect.value;

    let price = numberKm * 0.21

    if (numberAgeSelect == 1) {

        offerta = "offerta minorenni";
        return price = price - (price * 0.2);

    }

    else if (numberAgeSelect == 3) {

        offerta = "offerta over65";
        return price = price - (price * 0.4);

    }

    else {

        offerta = "offerta standard";
        return price;

    }
}

//decler the function to refresh the page
function refreshPage() {
    location.reload();
}

//declare the function to randomize 
function random() {
    return Math.floor(Math.random() * 10) + 1;
}

//declare the function to randomize CP code
function randomCP() {
    return Math.floor(Math.random() * 2000) + 1;
}




//let's put the function calc inside the adeventlistener trough the button

btnGenerate.addEventListener("click", function () {

    resultHtml.innerHTML = `il prezzo del tuo biglietto è ${calc(inputKmNumber, inputAgeSelect).toFixed(2)} €`;
    resultName.innerHTML = inputNameHtml.value;
    routeHtml.innerHTML = random();
    cpCodeHtml.innerHTML = randomCP();
})














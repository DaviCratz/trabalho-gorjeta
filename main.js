let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber


}

function receiveNumberOfPeapleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber


}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    buttonSelected = Document.querySelector(`#button-${value} `)
    buttonSelected.classList.add("button-selected")
}
const convertButton = document.querySelector(".convert-button")


function inputValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
   
    const dolarToday = 5.00

    const convertedValue = inputCurrencyValue / dolarToday
    console.log(inputCurrencyValue)
}



convertButton.addEventListener("click", inputValues)
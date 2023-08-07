const convertButton = document.querySelector(".convert-button")
const currencySelectFor = document.querySelector('.currency-select-for')
const currencySelectIn = document.querySelector('.currency-select-in')

function convertValues() {

    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueToConverted = document.querySelector('.currency-value')



    const dolarToday = 4.90
    const euroToday = 5.39
    const realToday = 1.00
    const libraToday = 6.27



    if (currencySelectFor.value == 'dolar-for') {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelectFor.value == 'euro-for') {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelectFor.value == 'libra-for') {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(inputCurrencyValue / libraToday)

    }

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

}




function changeCurrency() {
    const currencyNameFor = document.getElementById('currency-name-for')
    const currencyNameIn = document.getElementById('currency-name-in')
    const currencyImagefor = document.querySelector('.currency-img-for')
    const currencyImageIn = document.querySelector('.currency-img-in')

    

    if (currencySelectFor.value == 'dolar-for') {
        currencyNameFor.innerHTML = 'Dólar americano'
        currencyImagefor.src = './assets/dolar.png'

    }

    if (currencySelectFor.value == 'euro-for') {
        currencyNameFor.innerHTML = 'Euro'
        currencyImagefor.src = './assets/euro.png'
    }

    if (currencySelectFor.value == 'real-for') {
        currencyNameFor.innerHTML = 'Real'
        currencyImagefor.src = './assets/real.png'
    }

    if (currencySelectFor.value == 'libra-for') {
        currencyNameFor.innerHTML = 'Libra'
        currencyImagefor.src = './assets/libra.png'
    }

    if (currencySelectIn.value == 'dolar-in') {
        currencyNameIn.innerHTML = 'Dólar americano'
        currencyImageIn.src = './assets/dolar.png'

}

if (currencySelectIn.value == 'euro-in') {
    currencyNameIn.innerHTML = 'Euro'
    currencyImageIn.src = './assets/euro.png'
}

if (currencySelectIn.value == 'real-in') {
    currencyNameIn.innerHTML = 'Real'
    currencyImageIn.src = './assets/real.png'
}

if (currencySelectIn.value == 'libra-in') {
    currencyNameIn.innerHTML = 'Libra'
    currencyImageIn.src = './assets/libra.png'
}
   
}


currencySelectFor.addEventListener('change', changeCurrency)
currencySelectIn.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
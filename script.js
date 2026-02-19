const convertButton = document.querySelector("#button-container")
const valor = document.querySelector("#input-container")

//paragrafos do nome das moedas
const valueToConvert = document.querySelector("#p6")
const convertedValue = document.querySelector("#p8")

//parte dos inputs
const convertSelect = document.querySelector("#convert-select")
const currencySelect = document.querySelector("#curency-select")

//parte das imagens
const imgToConvertCurrency = document.querySelector("#img-to-convert-currency")
const imgConvertedCurrency = document.querySelector("#img-converted-currency")

//parte do nome das moedas
const convertCurrencyName = document.querySelector("#convert-currency-name")
const convertedCurrencyName = document.querySelector("#converted-currency-name")

function convertValeus() {
    const valorN = Number(valor.value) //valor em real
    const dolarToday = 5.21 //valor do dolar
    const euroToday = 6.18 //valor do euro
    const libraToday = 7.07 //valor da libra
    const bitcoinToday = 347.924 // valor do bicoin

    //APENAS USANDO O REAL NA PRIMEIRA OPTION 
    if (convertSelect.value == "real" && currencySelect.value == "dolar") {

        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorN / dolarToday)

    }

    if (convertSelect.value == "real" && currencySelect.value == "euro") {

        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorN / euroToday)

    }

    if (convertSelect.value == "real" && currencySelect.value == "libra") {

    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN / libraToday)

    }

    if (convertSelect.value == "real" && currencySelect.value == "bitcoin") {

        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
        }).format(valorN / bitcoinToday)

    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorN)
    //ACIMA, UTILIZANDO SOMENTE O REAL NA PRIMEIRA OPTION


    //UTILIZANDO SOMENTE O DOLAR NA PRIMEIRA OPTION

    //DOLAR para DOLAR
    if (convertSelect.value == "dolar" && currencySelect.value == "dolar") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN)
    }

    //DOLAR para REAL
    if (convertSelect.value == "dolar" && currencySelect.value == "real") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(dolarToday * valorN)
    }

    //DOLAR para EURO
    if (convertSelect.value == "dolar" && currencySelect.value == "euro") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN * 0.85)
    }
    
    //DOLAR para LiBRA
    if (convertSelect.value == "dolar" && currencySelect.value == "libra") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN * 0.74)
    }

    //DOLAR para BITCOIN
    if (convertSelect.value == "dolar" && currencySelect.value == "bitcoin") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 8,
        maximumFractionDigits: 8,
        }).format(valorN * 0.000015)
    }

    //UTILIZANDO SOMENTE O EURO NA PRIMEIRA OPTION

    //EURO para EURO
    if (convertSelect.value == "euro" && currencySelect.value == "euro") {

    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN)
    }

    //ERUO para REAL
    
}

function upCurrencyChange () {
    //select de cima

    //Do REAL
    if (convertSelect.value == "real") {

    imgToConvertCurrency.src = "./assets/real.png"
    imgToConvertCurrency.alt = "currency-real"

    convertCurrencyName.innerText = "Real"

    valueToConvert.innerHTML = "R$ 0,00"

    valor.placeholder = "R$ 0,00"
    }

    //Do DOLAR
    if (convertSelect.value == "dolar") {

    imgToConvertCurrency.src = "./assets/estados-unidos-1.png"
    imgToConvertCurrency.alt = "currency-dolar"

    convertCurrencyName.innerText = "Dólar"

    valueToConvert.innerHTML = "US$ 0.0"

    valor.placeholder = "US$ 0.0"
    }

    //Do EURO
    if (convertSelect.value == "euro") {

    imgToConvertCurrency.src = "./assets/euro.png"
    imgToConvertCurrency.alt = "currency-euro"

    convertCurrencyName.innerText = "Euro"

    valueToConvert.innerHTML = "0,00 €"

    valor.placeholder = "0,00 €"
    }

    //Da LIBRA
    if (convertSelect.value == "libra") {

    imgToConvertCurrency.src = "./assets/libra-1.png"
    imgToConvertCurrency.alt = "currency-libra"

    convertCurrencyName.innerText = "Libra"

    valueToConvert.innerHTML = "£0.00"

    valor.placeholder = "£0.00"
    }

    //Do BITCOIN
    if (convertSelect.value == "bitcoin") {

    imgToConvertCurrency.src = "./assets/bitcoin-1.png"
    imgToConvertCurrency.alt = "currency-bitcoin"

    convertCurrencyName.innerText = "Bitcoin"

    valueToConvert.innerHTML = "0.00000000"

    valor.placeholder = "0.000000"
    }
}

function downCurrencyChange () {
    //select de baixo

    //Do REAL
    if (currencySelect.value == "real") {

    imgConvertedCurrency.src = "./assets/real.png"
    imgConvertedCurrency.alt = "currency-real"

    convertedCurrencyName.innerText = "Real"

    convertedValue.innerHTML = "R$ 0,00"
}

    //Do DOLAR
    if (currencySelect.value == "dolar") {

    imgConvertedCurrency.src = "./assets/estados-unidos-1.png"
    imgConvertedCurrency.alt = "currency-dolar"

    convertedCurrencyName.innerText = "Dólar"

    convertedValue.innerHTML = "US$ 0.0"
}

    //Do EURO
    if (currencySelect.value == "euro") {

    imgConvertedCurrency.src = "./assets/euro.png"
    imgConvertedCurrency.alt = "currency-euro"

    convertedCurrencyName.innerText = "Euro"

    convertedValue.innerHTML = "0,00 €"
}

    //Da LIBRA
    if (currencySelect.value == "libra") {

    imgConvertedCurrency.src = "./assets/libra-1.png"
    imgConvertedCurrency.alt = "currency-libra"

    convertedCurrencyName.innerText = "Libra"

    convertedValue.innerHTML = "£0.00"
}

    //Do BITCOIN
    if (currencySelect.value == "bitcoin") {

    imgConvertedCurrency.src = "./assets/bitcoin-1.png"
    imgConvertedCurrency.alt = "currency-bitcoin"

    convertedCurrencyName.innerText = "Bitcoin"

    convertedValue.innerHTML = "0.00000000"
}

}
//escuta o click do botão
convertButton.addEventListener("click", convertValeus)

//escuta a change no select de cima
convertSelect.addEventListener("change", upCurrencyChange)

//escuta a change no select de baixo
currencySelect.addEventListener("change", downCurrencyChange)

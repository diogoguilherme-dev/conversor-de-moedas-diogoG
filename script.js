const convertButton = document.querySelector("#button-container")
const valor = document.querySelector("#input-container")
const valueToConvert = document.querySelector("#p6")
const convertedValue = document.querySelector("#p8")
const currencySelect = document.querySelector("#curency-select")
const imgConvertedCurrency = document.querySelector("#img-converted-currency")
const currencyName = document.querySelector("#currency-name")

function convertValeus() {
    const valorN = Number(valor.value) //valor em real
    const dolarToday = 5.21 //valor do dolar
    const euroToday = 6.18 //valor do euro
    const libraToday = 7.07 //valor da libra

    if (currencySelect.value == "dolar") {

        imgConvertedCurrency.src = "./assets/estados-unidos-1.png"
        imgConvertedCurrency.alt = "currency-dolar"

        currencyName.innerText = "Dólar"

        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorN / dolarToday)

    }

    if (currencySelect.value == "euro") {

        imgConvertedCurrency.src = "./assets/euro.png"
        imgConvertedCurrency.alt = "currency-euro"

        currencyName.innerText = "Euro"

        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorN / euroToday)

    }

    if (currencySelect.value == "libra") {

    imgConvertedCurrency.src = "./assets/libra-1.png"
    imgConvertedCurrency.alt = "currency-libra"

    currencyName.innerText = "Libra"

    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN / libraToday)

    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorN)
    


}

convertButton.addEventListener("click", convertValeus)



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
    const bitcoinToday = 348960.40 // valor do bicoin

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
            minimumFractionDigits: 6,
            maximumFractionDigits: 6,
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
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN * 0.000015)
    }
    //ACIMA, UTILIZANDO SOMENTE O DOLAR NA PRIMEIRA OPTION 
    
    
    
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

    //EURO para REAL
    if (convertSelect.value == "euro" && currencySelect.value == "real") {

    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorN * 6.13)
    }
    
    //EURO para DOLAR
    if (convertSelect.value == "euro" && currencySelect.value == "dolar") {

    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN * 1.18)
    }

    //EURO para LIBRA
    if (convertSelect.value == "euro" && currencySelect.value == "libra") {

    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN * 0.87)
    }

    //EURO para BITCOIN 
    if (convertSelect.value == "euro" && currencySelect.value == "bitcoin") {

    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN * 0.000018)
    }

    //ACIMA, UTILIZANDO SOMENTE O EURO NA PRIMEIRA OPTION 
    
    
    
    //UTILIZANDO SOMENTE O LIBRA NA PRIMEIRA OPTION

    //LIBRA opara LIBRA
    if (convertSelect.value == "libra" && currencySelect.value == "libra") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN)
    }

    //LIBRA para REAl
    if (convertSelect.value == "libra" && currencySelect.value == "real") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorN * 7.02)
    }

    //LIBRA para DOLAR
    if (convertSelect.value == "libra" && currencySelect.value == "dolar") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN * 1.35)
    }

    //LIBRA para EURO
    if (convertSelect.value == "libra" && currencySelect.value == "euro") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN * 1.14)
    }

    //LIBRA para BITCOIN]
    if (convertSelect.value == "libra" && currencySelect.value == "bitcoin") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN * 0.000020)
    }

    //ACIMA, UTILIZANDO SOMENTE O LIBRA NA PRIMEIRA OPTION 
    
    
    
    //UTILIZANDO SOMENTE O BITCOIN NA PRIMEIRA OPTION

    //BITCOIN para BITCOIN

    if (convertSelect.value == "bitcoin" && currencySelect.value == "bitcoin") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN)
    }

    //BITCOIN para REAL
    if (convertSelect.value == "bitcoin" && currencySelect.value == "real") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorN * 348592.35)
    }

    //BITCOIN para DOLAR
    if (convertSelect.value == "bitcoin" && currencySelect.value == "dolar") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorN * 66991.14)
    } 
    
    //BITCOIN para EURO
    if (convertSelect.value == "bitcoin" && currencySelect.value == "euro") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorN * 56886.61)
    }

    //BITCOIN para LIBRA
    if (convertSelect.value == "bitcoin" && currencySelect.value == "libra") {

    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
        }).format(valorN)

    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorN * 49716.56)
    }
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

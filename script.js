const convertButton = document.querySelector("#button-container")
const valor = document.querySelector("#input-container")
const valueToConvert = document.querySelector("#p6")
const convertedValue = document.querySelector("#p8")


function convertValeus() {
    

const valorN = Number(valor.value)
const result = valorN * 5.2

    valueToConvert.innerText = valor.value

    convertedValue.innerText = result

}

convertButton.addEventListener("click", convertValeus)


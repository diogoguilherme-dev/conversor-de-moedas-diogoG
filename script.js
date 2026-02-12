const convertButton = document.querySelector("#button-container")
const valor = document.querySelector("#input-container")
const valueToConvert = document.querySelector("#p6")
const convertedValue = document.querySelector("#p8")


function convertValeus() {


    const valorN = Number(valor.value)
    const result = valorN * 5.21

    const valor1 = valorN.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });

    const valor2 = result.toLocaleString('en-US', {style: 'currency', currency: 'USD' });
    console.log(valor1)
    console.log(valor2)

    valueToConvert.innerText = valor1

    convertedValue.innerText = valor2

}

convertButton.addEventListener("click", convertValeus)


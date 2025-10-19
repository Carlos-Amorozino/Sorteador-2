const button = document.querySelector(`button`)
function calculate() {
    const input1 = document.querySelector(`.input-1`).value
    const input2 = document.querySelector(`.input-2`).value
    const resultP = document.querySelector(`p`)

    const minCeiled = Math.ceil(input1);
    const maxFloored = Math.floor(input2);

    if (minCeiled < maxFloored) {

        const result = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

        resultP.innerHTML = `RESULTADO: ${result}`
    }

    else {
        resultP.innerHTML = `O valor MÍNIMO deve ser MENOR que o valor MÁXIMO.`
    }
}

button.addEventListener(`click`, calculate)
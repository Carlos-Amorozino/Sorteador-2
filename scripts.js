const button = document.querySelector(`button`)
function calculate() {
    const input1 = document.querySelector(`.input-1`).value
    const input2 = document.querySelector(`.input-2`).value
    const resultP = document.querySelector(`p`)

    const minCeiled = Math.ceil(input1);
    const maxFloored = Math.floor(input2);
    const result = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    resultP.innerHTML = `RESULTADO: ${result}`
}

button.addEventListener(`click`, calculate)
let drawnNumbers = [];

function drawNumber() {
    if (drawnNumbers.length >= 90) {
        alert("Todos os números foram sorteados!");
        return;
    }
    let number;
    do {
        number = Math.floor(Math.random() * 90) + 1;
    } while (drawnNumbers.includes(number));
    drawnNumbers.push(number);
    document.getElementById('drawnNumbers').textContent = "Números sorteados: " + drawnNumbers.join(', ');
}

function checkNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    const checkResult = document.getElementById('checkResult');
    
    if (isNaN(number) || number < 1 || number > 90) {
        checkResult.textContent = "Informe um número válido entre 1 e 90.";
        checkResult.style.color = 'red';
        return;
    }

    if (drawnNumbers.includes(number)) {
        checkResult.textContent = `Número ${number} já foi sorteado.`;
        checkResult.style.color = 'green';
    } else {
        checkResult.textContent = `Number ${number} não foi sorteado ainda.`;
        checkResult.style.color = 'red';
    }
}
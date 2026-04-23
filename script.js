function getColor(num) {
    if (num <= 10) return 'yellow';
    if (num <= 20) return 'blue';
    if (num <= 30) return 'red';
    if (num <= 40) return 'gray';
    return 'green';
}

function generateLotto() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let allLines = '';

    for (let i = 0; i < 5; i++) {
        let numbers = [];

        while (numbers.length < 6) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) numbers.push(num);
        }

        numbers.sort((a, b) => a - b);

        let line = '<div>';
        numbers.forEach(n => {
            let color = getColor(n);
            line += `<span class="ball ${color}">${n}</span>`;
        });
        line += '</div>';

        allLines += line;
    }
    resultDiv.innerHTML = allLines;
}
function performOperations() {
    var inputElement = document.getElementById("numbers");
    var resultElement = document.getElementById("result");

    var numbersString = inputElement.value;
    var numbersArray = numbersString.split(',').map(Number);

    // Beräkna summan av talen
    var sum = numbersArray.reduce(function (acc, num) {
        return acc + num;
    }, 0);

    // Skriv ut talen snyggt
    var numbersStringFormatted = numbersArray.join(', ');

    // Beräkna medelvärdet av talen
    var average = sum / numbersArray.length;

    // Sortera talen (som strängar för att hantera ensiffriga tal korrekt)
    var sortedNumbers = numbersArray.sort(function (a, b) {
        return a - b;
    });

    // Skriv ut resultaten
    resultElement.innerHTML = `
        <p>Talen: ${numbersStringFormatted}</p>
        <p>Summan: ${sum}</p>
        <p>Medelvärdet: ${average.toFixed(2)}</p>
        <p>Sorterade tal: ${sortedNumbers.join(', ')}</p>
    `;
}

const sum = (a, b) => a + b;

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euroAmount) => euroAmount * 1.07;
const fromDollarToYen = (dollarAmount) => (dollarAmount / 1.07) * 156.5;
const fromYenToPound = (yenAmount) => (yenAmount / 156.5) * 0.87;

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require("./app.js");

test("Prueba función fromEuroToDollar: 1€ deben ser 1.07$", () => {
    let result = fromEuroToDollar(1);
    expect(result).toBe(1.07);
});

test("Prueba 2 función fromEuroToDollar: 4€ deben ser 4.28$", () => {
    let result = fromEuroToDollar(4);
    expect(result).toBe(4.28);
});

test("Prueba función fromDollarToYen: 1.07$ debe ser 156.5 yenes", () => {
    let result = fromDollarToYen(1.07);
    expect(result).toBe(156.5);
});

test("Prueba 2 función fromDollarToYen: 4.28$ deben ser 626 yenes", () => {
    let result = fromDollarToYen(4.28);
    expect(result).toBe(626);
});

test("Prueba función fromYenToPound: 156.5 yenes debe ser 0.87 pounds", () => {
    let result = fromYenToPound(156.5);
    expect(result).toBe(0.87);
});

test("Prueba 2 función fromYenToPound: 626 yenes deben ser 3.48 pounds", () => {
    let result = fromYenToPound(626);
    expect(result).toBe(3.48);
});
const {sum} = require("/app.js");

test("sumar 14 y 9 da 23", () => {
    let resultado = sum(14,9);
    expect(resultado).toBe(23);
});
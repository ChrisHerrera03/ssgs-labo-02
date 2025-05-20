const op = require("../src/stringUtils");

test("La stringa 'anna' è palindroma? true", () => {
    expect(op.isPalindrome("anna")).toBe(true);
});

test("La stringa 'ciao' è palindroma? false", () => {
    expect(op.isPalindrome("ciao")).toBe(false);
});


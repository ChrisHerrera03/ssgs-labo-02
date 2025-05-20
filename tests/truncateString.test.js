const op = require("../src/stringUtils");

test("Stringa 'Michael Morales' troncata a partire dalla posizione 2: Mi... ", () => {
    expect(op.truncateString("Michael Morales",2)).toBe("Mi...");
});

test("Stringa 'Ciao Frenk' troncata a partire dalla posizione 2: Mi...`", () => {
    expect(op.truncateString("Ciao Frenk",10)).toBe("Ciao Frenk");
});



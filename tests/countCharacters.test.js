const op = require("../src/stringUtils");

test("Stringa 'lollo' ", () => {
    expect(op.countCharacters("lollo")).toEqual( {l: 3, o: 2} );
});


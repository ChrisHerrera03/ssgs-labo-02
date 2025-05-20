const op = require("../src/stringUtils");

test("ciao è uguale oaic", () => {
    expect(op.reverseString("ciao")).toBe("oaic");
});

test("internazionale è uguale elanoizanretni", () => {
    expect(op.reverseString("internazionale")).toBe("elanoizanretni");
});


test(" ' ' è ' '", () => {
    expect(op.reverseString(" ")).toBe(" ");
});

var morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "/",
};
var textCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(function (_a) {
    var key = _a[0], value = _a[1];
    return [value, key];
}));
function textToMorse(text) {
    return text
        .toUpperCase()
        .split("")
        .map(function (letra) { return morseCodeMap[letra] || ""; })
        .join(" ");
}
function morseToCode(morse) {
    return morse
        .split(" ")
        .map(function (char) { return textCodeMap[char] || ""; })
        .join("");
}
console.log(textToMorse("Hello World"));
console.log(morseToCode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));

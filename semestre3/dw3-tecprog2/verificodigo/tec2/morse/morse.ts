const morseCodeMap: Record<string, string> = {
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

const textCodeMap: Record<string, string> = Object.fromEntries(
  Object.entries(morseCodeMap).map(([key, value]) => [value, key])
);

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((letra) => morseCodeMap[letra] || "")
    .join(" ");
}

function morseToCode(morse: string): string {
  return morse
    .split(" ")
    .map((char) => textCodeMap[char] || "")
    .join("");
}

console.log(textToMorse("Hello World"));
console.log(morseToCode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));

import promptSync = require("prompt-sync");

const prompt = promptSync();

function getArea() {
  let area = parseFloat(
    prompt(`Qual o tamanho da área (em metros quadrados) que deseja pintar? `)
  );

  if (isNaN(area) || area < 0) {
    console.log("Por favor, insira um número válido");
    return 0;
  } else {
    return area;
  }
}

let area = getArea();
let litros: number = area / 6;
if (area > 0) {
  console.log(`Você vai precisar de: \n == ${litros} litros de tinta ==`);
}

let lata = 0;
let galao = 0;

function calcQntd() {
  for (let i = 0; litros >= 18; i++) {
    litros -= 18;
    lata++;
  }

  for (let i = 0; litros > 0; i++) {
    litros -= 3.6;
    galao++;
  }

  return console.log(
    `Você precisa comprar:\n 
    ${lata} latas de 18L = R$${lata * 80} \n 
    ${galao} galões de 3,6L = R$${galao * 25} \n
    GASTO TOTAL: R$${lata * 80 + galao * 25}`
  );
}

calcQntd();

//VERSÃO CORRIGIDA:
/* function calcQntd() {
    let latas = Math.floor(litros / 18);
    let sobra = litros % 18;
    let galoes = Math.ceil(sobra / 3.6); */

function verificarPalindromo(texto) {
  let textoLimpo = texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  let isPalindromo = false;

  for (let i = 0; i < textoLimpo.length / 2; i++) {
    if (textoLimpo[i] != textoLimpo[textoLimpo.length - 1 - i]) {
      console.log(`A palavra não é um palíndromo`);
      return false;
    }
  }

  console.log(`A palavra é um palíndromo`);
  return true;
}

verificarPalindromo("A base do teto desaba");

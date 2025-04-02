import express from "express";

const app = express();

let removeDuplicados = (palavra) => {
  let arrayPalavra = palavra.split("");
  for (let i = 0; i < arrayPalavra.length - 1; i++) {
    for (let j = i + 1; j < arrayPalavra.length; j++) {
      if (arrayPalavra[i] === arrayPalavra[j]) {
        arrayPalavra.splice(j, 1);
        j--;
      }
    }
  }
  return arrayPalavra.join("");
};

app.get("/remove-duplicates/:palavra", (Request, Response) => {
  let palavra = Request.params.palavra;
  let palavraMod = removeDuplicados(palavra);

  console.log(palavra);
  Response.send(`
    Palavra: ${palavra} <br>
    Palavra sem caracteres repetidos: ${palavraMod}
    `);
});

let PORT = 3000;
app.listen(PORT, console.log(`Runing on port ${PORT}`));

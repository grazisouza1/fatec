import express from "express";

const app = express();

let removeDuplicados = () => {};

app.get("/remove-duplicates/:palavra", (Request, Response) => {
  let palavra = Request.params.palavra;
  let palavraMod = removeDuplicados();

  console.log(palavra);
  Response.send(`Palavra sem caracteres repetidos: ${palavraMod}`);
});

let PORT = 3001;
app.listen(PORT, console.log(`Runing on port ${PORT}`));

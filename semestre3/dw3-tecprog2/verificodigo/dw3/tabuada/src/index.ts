import { Request, Response } from "express";
import express from "express";

const app = express();

app.get("/tabuada/:numero", (req: Request, res: Response) => {
  const numero = parseInt(req.params.numero);

  const tabuada: { [key: string]: number } = {};
  for (let i = 1; i <= 10; i++) {
    tabuada[`${numero} x ${i}`] = numero * i;
  }

  res.json(tabuada);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

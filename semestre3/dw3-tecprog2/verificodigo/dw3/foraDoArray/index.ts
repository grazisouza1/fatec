const jumpOutOfArray = (array: number[]) => {
  let saltos = 0;
  for (let i = 0; i <= array.length; i += array[i]) {
    saltos++;
  }
  console.log(
    `O número de saltos necessários para sair de um aarray, é de: ${saltos}`
  );
};

jumpOutOfArray([2, -3, 1, 4, -5, -3, 3]);

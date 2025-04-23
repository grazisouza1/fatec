let calcularCombustivel = (dis: number, vel: number, efi: number) => {
  let com = dis * (1 + vel / 10) * efi;

  return console.log(
    `Para uma viagem de ${dis} parsecs à velocidade ${vel} mega-luz com eficiência ${efi}: Será necessário ${com} unidades de combustível.`
  );
};

calcularCombustivel(120, 8, 0.5);

var calcularCombustivel = function (dis, vel, efi) {
    var com = dis * (1 + vel / 10) * efi;
    return console.log("Para uma viagem de ".concat(dis, " parsecs \u00E0 velocidade ").concat(vel, " mega-luz com efici\u00EAncia ").concat(efi, ": Ser\u00E1 necess\u00E1rio ").concat(com, " unidades de combust\u00EDvel."));
};
calcularCombustivel(120, 8, 0.5);

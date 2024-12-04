package TP1;

import java.time.LocalDate;

public class conta_poupanca extends conta_comum {
	private LocalDate aniversario_mensal;
	
    public conta_poupanca(double numero_conta, LocalDate data_abertura, String senha, double saldo, int situacao, LocalDate aniversario_mensal) {
        super();
        this.numero_conta = numero_conta;
        this.data_abertura = data_abertura;
        this.senha = senha;
        this.saldo = saldo;
        this.situacao = situacao;
        this.aniversario_mensal = aniversario_mensal;
    }
}

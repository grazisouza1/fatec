package TP1;

import java.time.LocalDate;

public class conta_especial extends conta_comum {
	private double limite_conta;
	
    public conta_especial(double numero_conta, LocalDate data_abertura, String senha, double saldo, int situacao, LocalDate aniversario_mensal) {
        super();
        this.numero_conta = numero_conta;
        this.data_abertura = data_abertura;
        this.senha = senha;
        this.saldo = saldo;
        this.situacao = situacao;
        this.limite_conta = limite_conta;
    }
	
	public double saque(double valor) {
		if (valor > limite_conta) {
			System.out.println("Limite atingido, insira um valor menor");
			return saldo;
		}
		if (valor >= saldo) {
			System.out.println("Valor maior que o saldo disponível");
			return saldo;
		}
		if (valor < 0) {
			System.out.println("Insira um número positivo");
			return saldo;
		} else {
			saldo -= valor;
			return saldo;
		}
	}
}

package TP1;

import java.time.LocalDate;

public class conta_comum2 {
	protected double numero_conta;
	protected LocalDate data_abertura;
	protected LocalDate data_encerramento;
	protected int situacao;
	protected String senha;
	protected double saldo;

	public conta_comum2() {
		this.numero_conta = numero_conta;
		this.data_abertura = data_abertura;
		this.data_encerramento = data_encerramento;
		this.situacao = situacao;
		this.senha = senha;
		this.saldo = saldo;
	}

	public double deposito(double valor) {
		if (valor < 0) {
			System.out.println("Insira um valor válido");
			return saldo;
		} else {
			saldo += valor;
			return saldo;
		}
	}
	
	public double saque(double valor) {
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
	
	public LocalDate data_abertura() {
		return data_abertura;
	}
	
	public LocalDate data_encerramento() {
		return data_encerramento;
	}
	
	public boolean conferir_senha(String senhaInformada) {
		return this.senha.equals(senhaInformada);
	}
	
	public void abrir_conta(double numero_conta, LocalDate data_abertura, String senha, double saldo, int situacao ) {
		this.numero_conta = numero_conta;
		this.data_abertura = data_abertura;
		this.senha = senha;
		this.saldo = 0.0;
		this.situacao = 1;
	}
	
	public void encerrar_conta(LocalDate data_encerramento, int situacao) {
		if (situacao == 1) {
			this.data_encerramento = data_encerramento;
			this.situacao = 0;
			System.out.println("Conta encerrada com sucesso");
		}
	}
}





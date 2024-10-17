import java.util.Scanner;

public class ContaBancaria {
    private int numeroDaConta;
    private double saldo;
    private Scanner scanner = new Scanner(System.in);

    public ContaBancaria(int numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = 0.0;
    }

    public void depositar() {
        System.out.println("Qual valor você deseja depositar?");
        double valor = scanner.nextDouble();
        
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("O valor de depósito deve ser positivo.");
        }
    }

    public void sacar() {
        System.out.println("Qual valor você deseja sacar?");
        double valor = scanner.nextDouble(); 
        
        if (valor > 0) {
            if (valor <= saldo) {
                saldo -= valor;
                System.out.println("Saque de R$" + valor + " realizado com sucesso.");
            } else {
                System.out.println("Saldo insuficiente para saque.");
            }
        } else {
            System.out.println("O valor de saque deve ser positivo.");
        }
    }

    public void verSaldo() {
        System.out.printf("Saldo atual: R$%.2f\n", saldo);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o número da conta:");
        int numeroDaConta = scanner.nextInt();
        ContaBancaria conta = new ContaBancaria(numeroDaConta);

        conta.depositar(); 
        conta.verSaldo();  

        conta.sacar();     
        conta.verSaldo();  

        scanner.close(); 
    }
}

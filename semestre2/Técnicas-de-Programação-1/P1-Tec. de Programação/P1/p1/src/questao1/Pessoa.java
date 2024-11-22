package questao1;

import java.util.Scanner;

public class Pessoa {
    private String nome;
    private float altura;
    private float peso;

    public float calculeIMC(float altura, float peso) {
        return peso / (altura * altura);
    }

    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("Digite seu nome: ");
    	String nome = scanner.nextLine();
    	
    	System.out.println("Digite sua altura: ");
    	float altura = scanner.nextFloat();
    	
    	System.out.println("Digite seu peso: ");
    	float peso = scanner.nextFloat();
    	
        Pessoa pessoa = new Pessoa();
        pessoa.nome = nome;
        pessoa.altura = altura;
        pessoa.peso = peso;

        float imc = pessoa.calculeIMC(pessoa.altura, pessoa.peso);
        System.out.println("O IMC é de: " + imc);
        if (imc > 24.99) {
            System.out.println("Você está com sobrepeso!");
        }else {
            System.out.println("Você não está com sobrepeso");
        }
    }
}

package questao3;

import java.util.Scanner;

public class Calculadora {
	public float somar(float n1, float n2){
		float res = n1 + n2;
		System.out.println("O resultado da soma foi de: " +res);
		return res;
	}
	
	public float subtrair(float n1, float n2) {
		float res = n1 - n2;
		System.out.println("O resultado da subtração foi de: " +res);
		return res;
	}
	
	public float multiplicar(float n1, float n2) {
		float res = n1 * n2;
		System.out.println("O resultado da multiplicação foi de: " +res);
		return res;
	}
	
	public float dividir(float n1, float n2) {
		float res = n1 / n2;
		System.out.println("O resultado da divisão foi de: " +res);
		return res;
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Digite um número: ");
		int num1 = scanner.nextInt();
		
		System.out.println("Digite outro número: ");
		int num2 = scanner.nextInt();
		
		scanner.close();
		
		Calculadora calculadora = new Calculadora();
		
		calculadora.somar(num1, num2);
		calculadora.subtrair(num1, num2);
		calculadora.multiplicar(num1, num2);
		calculadora.dividir(num1, num2);
	}
}

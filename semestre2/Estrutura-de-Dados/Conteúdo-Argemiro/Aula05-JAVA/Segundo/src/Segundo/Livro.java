package Segundo;

public class Livro {
	String nome;
	String descricao;
	double valor;
	String isbn;
	
	Livro livro = new Livro();
	livro.nome = "Java 8 Prático";
	livro.descricao = "Novos recursos da linguagem";
	livro.valor = 59.90;
	livro.isbn = "978-85-66250-46-6";
	System.out.println(livro);
}

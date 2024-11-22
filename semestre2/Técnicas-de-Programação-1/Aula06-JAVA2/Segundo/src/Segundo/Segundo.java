package Segundo;

public class Segundo {
	public static void main(String[] args) {
		double livroJava8;
		double livroTDD;
		
		livroJava8 = 59.90;
		livroTDD = 59.90;
		double soma = livroJava8 + livroTDD;
		System.out.println("A soma é: " +soma);
		boolean resultado = soma < 150;
		System.out.println(resultado);
		
		Livro livro = new Livro();
		livro.nome = "Memórias do Subsolo";
		livro.descricao = "Pensamentos de um homem triste";
		livro.valor = 26.90;
		livro.isbn = "978-85-66250-46-6";
		
 		Livro outroLivro = new Livro();
		outroLivro.nome = "Lógica de programação";
		outroLivro.descricao = "Crie seus primeiros programas";
		outroLivro.valor = 59.90;
		outroLivro.isbn = "978-85-66250-22-0";

		livro.mostrarDetalhes();
		System.out.println("\n");
		outroLivro.mostrarDetalhes();
		
		Autor autor = new Autor();
		autor.nome = "Rodrigo Turini";
		autor.email = "rodrigo.turini@caelum.com.br";
		autor.cpf = "123.456.789.10";
		System.out.println(autor.nome);
		
		livro.autor = autor;
		livro.mostrarDetalhes();
		
		Autor outroAutor = new Autor();
		outroAutor.nome = "Paulo Silveira";
		outroAutor.email = "paulo.silveira@caelum.com.br";
		outroAutor.cpf = "123.456.789-99";
		
		outroLivro.autor = outroAutor;
		outroLivro.mostrarDetalhes();
	}
}

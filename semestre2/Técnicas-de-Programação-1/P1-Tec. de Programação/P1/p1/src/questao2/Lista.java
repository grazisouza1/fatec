package questao2;

import java.util.Scanner;
import java.util.ArrayList;

public class Lista {
    private ArrayList<String> nomes;
    private Scanner scanner;

    public Lista() {
        nomes = new ArrayList<>();
        scanner = new Scanner(System.in); // Inicializando corretamente
    }

    public void adicionarNome() {
        System.out.println("Digite um nome para adicionar: ");
        String nome = scanner.nextLine();
        nomes.add(nome);
    }

    public void apagarNome() {
        System.out.println("Digite o nome que você quer remover: ");
        String nome = scanner.nextLine();
        nomes.remove(nome);
    }

    public int consultarTamanho() {
        return nomes.size();
    }

    public boolean pesquisarPessoa() {
        System.out.println("Digite a pessoa que quer consultar: ");
        String nome = scanner.nextLine();
        if (nomes.contains(nome)) {
        	System.out.println("O nome está na lista");
        } else {
        	System.out.println("O nome não está na lista");
        }
    }

    public void exibirLista() {
        if (nomes.isEmpty()) {
            System.out.println("A lista está vazia");
        } else {
            System.out.println("Nomes da lista: ");
            for (String nome : nomes) {
                System.out.println(nome);
            }
        }
    }

    public void excluirLista() {
        nomes.clear();
        System.out.println("Lista excluída");
    }

    public static void main(String[] args) {
        Lista lista = new Lista();

        System.out.println("Digite a quantidade de nomes: ");
        int qtde = lista.scanner.nextInt(); // Agora deve funcionar corretamente
        lista.scanner.nextLine();

        for (int i = 0; i < qtde; i++) {
            lista.adicionarNome();
        }

        System.out.println("Nomes digitados: ");
        lista.exibirLista();

        lista.adicionarNome();
        lista.apagarNome();
        lista.consultarTamanho();
        lista.pesquisarPessoa();
        lista.excluirLista();
    }
}

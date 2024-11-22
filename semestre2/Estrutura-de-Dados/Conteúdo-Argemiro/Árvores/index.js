class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        if (this.root == null) {
            let node = new Node(key)
            console.log("Primeiro node: " + node.key);
        }
    }

    insertNode(node, key){
        //Se o valor de key for menor do que node.key, devemos inseri-lo à esquerda de node.key. A regra para a BST é que os valores menores do que no pai, fiquem sempre à esquerda do nó pai, e os maiores, na direita
        if (key < node.key) {
            if (node.left == null) { //posição vaga
                let nodeaux = new Node(key)
                node.left = nodeaux
            } else {
                //chama essa mesma função recursivamente até que ache uma areta com o valor null (vaga), para inserir este novo nó
                this.insertNode(node.left, key)
            }
        }
    }

    search() {

    }

    inOrderTraverse() {
        //Visita todos os nós da árvore usando o percurso em...
        if (!node != null) {
            this.inOrderTraverse(node.left)
            console.log(node.key);
            this.inOrderTraverse(node.right)
        }
    }

    preOrderTraverse() {

    }

    postOrderTraverse() {

    }

    min() {

    }

    max() {

    }

    remove() {

    }
}

const arvore = new BinarySearchTree()
arvore.insert(7)
arvore.insert(5)
arvore.insert(12)
arvore.insert(3)
arvore.insert(9)
arvore.insert(15)
arvore.insert(4)
arvore.insert(11)
arvore.insert(13)
arvore.inOrderTraverse(arvore.root)
console.log('');
arvore.preOrderTraverse(arvore.root)
console.log('');
arvore.postOrderTraverse(arvore.root)

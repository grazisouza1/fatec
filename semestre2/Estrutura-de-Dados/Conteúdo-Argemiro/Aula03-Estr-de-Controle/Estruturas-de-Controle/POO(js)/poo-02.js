function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
}

//Para instanciar a classe, podemos usar:
var book = new Book('title', 'pag', 'isbn')

//Então podemos acessar suas propriedades e atualizá-las:
console.log(book.title)
book.title = 'new title'
console.log(book.title)

//Uma classe também tem funções, e podemos delará-las e usá-las assim:
Book.prototype.printTitle = function() {
    console.log(this.title)
}
book.printTitle();

//Também podemos declarar funções diretamente na definição da classe:
function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
    this.printIsbn = function() {
        console.log(this.isbn)
    }
}
book.printIsbn()
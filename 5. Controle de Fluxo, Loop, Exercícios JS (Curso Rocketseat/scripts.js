/*
    EXERCÍCIOS pt. 4

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        1. Contar o número de categorias e o número de livros em cada categoria
        2. Contar o número de autores
        3. Mostrar livros do autor Augusto Cury
        4. Transformar a função acima em uma função que irá receber o nome do autor e    devolver os livros desse autor.
*/

const booksByCategory = [
    { //booksByCategory[0]
        category: "Riqueza", //booksByCategory[0].category
        books: [ //booksByCategory[0].books
            { //booksByCategory[0].books[0]
                title: "Os segredos da mente milionária",
                //booksByCategory[0].books[0].title
                author: "T. Harv Eker",
                //booksByCategory[0].books[0].author
            },
            { //booksByCategory[0].books[1]
                title: "O homem mais rico da Babilônia",
                //booksByCategory[0].books[1].title
                author: "George S. Clason",
                //booksByCategory[0].books[1].author
            },
            { //booksByCategory[0].books[2]
                title: "Pai rico, pai pobre",
                //booksByCategory[0].books[2].title
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
                //booksByCategory[0].books[2].author
            },
        ],
    },
    { //booksByCategory[1]
        category: "Inteligência Emocional", //booksByCategory[1].category
        books: [ //booksByCategory[1].books
            { //booksByCategory[1].books[0]
                title: "Você é Insubstituível",
                //booksByCategory[1].books[0].title
                author: "Augusto Cury",
                //booksByCategory[1].books[0].author
            },
            { //booksByCategory[1].books[1]
                title: "Ansiedade - Como enfrentar o mal do século",
                //booksByCategory[1].books[1].title
                author: "Augusto Cury",
                //booksByCategory[1].books[1].author
            },
            { //booksByCategory[1].books[2]
                title: "Os 7 hábitos das pessoas altamente eficazes",
                //booksByCategory[1].books[2].title
                author: "Stephen R. Covey",
                //booksByCategory[1].books[2].author
            },
        ],
    },
];

//DESAFIO 1:
let numberOfCategories = booksByCategory.length
console.log(`Existem ${numberOfCategories} categorias.`)

for (let category of booksByCategory) {
    console.log(`A categoria ${category.category} possui ${category.books.length} livros.`)
}

//DESAFIO 2:
function numberOfAuthors() {
    let authors = [] ;

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(`O número de autores é ${authors.length}`)
}
numberOfAuthors()

//DESAFIO 3:
function getBooksByAugustoCury() {
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if (book.author == 'Augusto Cury') {
                console.log(book.title)
            }
        }
    }
}
// getBooksByAugustoCury()

//DESAFIO 4:

function getBooksByAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livro(s) do autor ${author}: ${books.join("; ")}`)
}
getBooksByAuthor('George S. Clason')

/*

    PRIMEIRA TENTATIVA

function getBooksByAuthor(author) {
    let authors = [] ;

    
    if(!authors.includes(author)) {
        console.log('Erro: Autor não encontrado')
    } else {
        for(let category of booksByCategory) {
            for(let book of category.books) {
                if (book.author == author) {
                    console.log(book.title)
                }
            }
        }
    }
    
}

getBooksByAuthor('George S. Clason')
getBooksByAuthor(1)
getBooksByAuthor('Augusto Cury')

    deu certo, porém não possui formatação adequada
    
*/
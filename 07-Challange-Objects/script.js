// Activity 01

let book = {
    title: 'Book 1',
    author: 'Author 1',
    year: 'Year 1',
    callMe: function(){
        return `Title ${this.title} and Author ${this.author}`
    }
}

console.log(book)

console.log(`Title: ${book.title} and Author: ${book.author}`);

// Activity 02

console.log(book.callMe());

book.updateYear = function(year){
    this.year = year
}

book.updateYear('New Year')

console.log(book);

// Activity 03

let library = {
    name: 'my library',
    books: [{
            title: 'Book 1',
            author: 'Author 1',
            year: 'Year 1'
        }, {
            title: 'Book 2',
            author: 'Author 2',
            year: 'Year 2'
        }, {
            title: 'Book 3',
            author: 'Author 3',
            year: 'Year 3'
        }, {
            title: 'Book 4',
            author: 'Author 4',
            year: 'Year 4'
        }, {
            title: 'Book 5',
            author: 'Author 5',
            year: 'Year 5'
        }]
}


console.log(library);

console.log(`The name of the library is ${library.name} and the books titles are written below: `);

for(let i = 0; i < library.books.length; i++){
    console.log(library.books[i].title);
}

// Activity 04

book.details = function(){
    return `Title ${this.title} and Author ${this.author}`
}

console.log(book.details());

// Activity 05

for(let myBook in library.books){
    console.log(library.books[myBook]);
}

for(let i = 0 ; i < Object.keys(book).length; i++){
    console.log(Object.keys(book)[i], ':', Object.values(book)[i]);
}
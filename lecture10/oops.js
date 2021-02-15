class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return this.title + " was written  by " + this.author + " in year : " + this.year;
    }

    getAge() {
        var y = 2021 - this.year;
        return "this book is " + y + " years old";
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static BookStore() {
        return "This book is from Daryaganj or Nai Sadak";
    }
}

console.log(Book.BookStore());

var book1 = new Book("Harry Potter", "J.K. Rowling", 2005);
console.log(book1);

book1.revise(2015);

console.log(book1);


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

var mag1 = new Magazine("Godaan","Munshi Premchand","1925","February");
console.log(mag1);
console.log(mag1.getSummary());
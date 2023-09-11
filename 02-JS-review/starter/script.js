const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
/*
//Destructuring with objects
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

title;
author;
console.log(author, title);

//Destructuring with arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//Spread operator takes genres out of the array one-by-one
const newGenres = [...genres, "epic fantasy"];
newGenres;

//Spread operator on objects//Takes of all the elements of the object to the new object
const updateBook = {
  ...book,

  //Adding a new property
  moviePublicationDate: "2001-12-19",

  //Overwriting an existing property
  pages: 1,
};
updateBook;

//Arrow functions
function getYear(str) {
  return str.split("-")[0];
}

//ARROW FUNCTION
const getYear = (str, a, b) => {
  return str.split("-")[0];
};
const getYear2 = (str, a, b) => str.split("-")[0];
console.log(getYear(publicationDate));
console.log(getYear2(publicationDate));

//Template literal
const summary = `${title}, a ${pages}-page long book, was written by ${author}, and published in ${
  publicationDate.split("-")[0]
},
the book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie (${getYear(publicationDate)})`;
summary;

//Ternary operator
const pagesRange = pages > 1000 ? "over thousand" : "less than thousand";
pagesRange;

//Logical operators/Short circuiting

//&&-operator short circuits when the first value is false and then immediately return the first value
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "this book has a movie");

//falsy values: 0, '(empty string), null, undefined

//||-operator short circuits when the first value is true and returns it (opposite &&)
console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

//Nullish coaleshing operator/Short circuits for falsy values/Only return the second value if the first
//value is null or undefined BUT NOT when it is 0 or ''(empty string)
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

//Optional chaining x Nullish coaleshing operator
//js no longer tries to read reviwesCount out of the undefined value
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;

  return goodreads + librarything;
}
// console.log(getTotalReviewCount(book));

//Map method
const books = getBooks();
const titles = books.map(book => book.title);
console.log(titles);

const essentialData = books.map(book => (
  {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  
}))
essentialData;

//Filter method
const longBooksWithMovie = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation)
longBooksWithMovie;

const adventureBooks = books.filter(book => book.genres.includes('adventure'))
.map(book => book.title);
adventureBooks;

//Reduce method
const books = getBooks();
const pagesAllBooks = books.reduce((accumulator, book) =>accumulator + book.pages, 0);
pagesAllBooks;

//Sort method //MUTATES THE ROIGINAL ARRAY
const books = getBooks();
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); //slice method gives a copy of arr array
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//Immutable arrays
//1. Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "JK rowling",
};
newBook;

const booksAfterAdd = [...books, newBook];
booksAfterAdd;
//2. Delete book from an array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
//3. Update a book object in the array
const booksAfterUpdated = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdated;

//Asynchronus js//Promises
fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  .then(response=> response.json())
  .then(data => console.log(data));
console.log(('pityke'));
*/
//Async Await
const getTodos = async function () {
  //Promise handling with then() functions
  // fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  // .then(response=> response.json())
  // .then(data => console.log(data));

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
};

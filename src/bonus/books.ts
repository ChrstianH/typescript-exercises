type BookSchema = {
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  id: number;
};

let bookList: BookSchema[] = [];

const bookForm = document.getElementById("book-form") as HTMLFormElement;
const titleInput = document.getElementById("title-input") as HTMLInputElement;
const authorInput = document.getElementById("author-input") as HTMLInputElement;
const genreSelect = document.getElementById(
  "genre-select"
) as HTMLSelectElement;
const yearInput = document.getElementById("year-input") as HTMLInputElement;
const pagesInput = document.getElementById("pages-input") as HTMLInputElement;
// ? Error und die Liste
const bookErrorOutput = document.getElementById("error-text") as HTMLDivElement;
const bookListOutput = document.getElementById("book-list");

bookForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log("Form submitted");

  const newBook = createBook();
  console.log(newBook);

  const errorMessage = validateBook(newBook);
  console.log(errorMessage);
  if (errorMessage === "") {
    bookList.push(newBook);
    showBooks(newBook);
  }
});

function createBook(): BookSchema {
  const newBook: BookSchema = {
    title: titleInput.value,
    author: authorInput.value,
    genre: genreSelect.value,
    year: Number(yearInput.value),
    pages: Number(pagesInput.value),
    id: bookList.length + 1,
  };
  return newBook;
}

function validateBook(book: BookSchema): string {
  if (book.title.length < 2) {
    return "Titel sollte zwei Buchstaben oder mehr haben";
  }
  return "";
}

function showBooks(book: BookSchema) {
  const liElement = document.createElement("li") as HTMLElement;
  liElement.innerHTML = `${book.title} by ${book.author} - ${book.genre} - written in ${book.year} - ${book.pages} Pages`;
  bookListOutput?.appendChild(liElement);
  const deleteButton = document.createElement("button") as HTMLButtonElement;
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    console.log(bookList);
    bookList = bookList.filter((el: BookSchema) => {
      liElement.remove();
      return el.id !== book.id;
    });
    console.log(bookList);
  });
  liElement.appendChild(deleteButton);
}

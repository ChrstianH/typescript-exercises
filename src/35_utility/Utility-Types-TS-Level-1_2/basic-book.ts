import { IBasicBook, IBook } from "./book";

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "Arthur Conan Doyle",
  name: "The Noble Bachelor",
  numberOfPages: 26,
};
console.log(basicBook);

const basicBook2: IBasicBook = {
  author: "Arthur Conan Doyle",
  name: "The Hound of the Baskervilles",
  numberOfPages: 256,
};
console.log(basicBook2);

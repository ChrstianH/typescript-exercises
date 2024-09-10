import { IBook, IPartialBook } from "./book";

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
  author: "Arthur Conan Doyle",
  name: "The Noble Bachelor",
};
console.log(partialBook);

const partialBook2: IPartialBook = { name: "The Noble Bachelor" };
console.log(partialBook2);

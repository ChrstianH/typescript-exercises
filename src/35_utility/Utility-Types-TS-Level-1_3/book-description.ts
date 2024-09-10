import { IBook, IBookDescription } from "./book";

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "The Hound of the Baskervilles",
  shortDescription:
    "The Hound of the Baskervilles by Sir Arthur Conan Doyle was originally serialized in The Strand Magazine from August 1901 to April 1902.",
};
console.log(bookDescription);

const bookDescription2: IBookDescription = {
  name: "The Hound of the Baskervilles",
  shortDescription:
    "The Hound of the Baskervilles by Sir Arthur Conan Doyle was originally serialized in The Strand Magazine from August 1901 to April 1902.",
};
console.log(bookDescription2);

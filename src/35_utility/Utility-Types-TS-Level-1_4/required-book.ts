import { IBook, IRequiredBook } from "./book";

type RequiredBook = Required<IBook>;

const requiredBook: RequiredBook = {
  author: "Arthur Conan Doyle",
  name: "The Hound of the Baskervilles",
  publishingYear: "1902",
  shortDescription: `"The Hound of the Baskervilles" is a classic detective novel that follows Sherlock Holmes and his friend Dr. Watson as they investigate a mysterious, seemingly supernatural hound terrorizing the Baskerville family. Set in the bleak moorland of Devonshire, the story blends elements of detective fiction with Gothic horror.`,
  numberOfPages: 256,
};
console.log(requiredBook);

const requiredBook2: IRequiredBook = {
  author: "Arthur Conan Doyle",
  name: "The Final Problem",
  publishingYear: "1893",
  shortDescription: `"The Final Problem" is a famous Sherlock Holmes short story in which the apparent death of the famous detective occurs. Sherlock Holmes and his arch-enemy Professor Moriarty engage in a final battle at the Reichenbach Falls in Switzerland. The story marks a turning point in the Sherlock Holmes series, as Conan Doyle initially planned not to revive the character.`,
  numberOfPages: 8,
};
console.log(requiredBook2);

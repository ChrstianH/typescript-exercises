export interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

export interface IPartialBook extends Partial<IBook> {}

export interface IBasicBook
  extends Omit<IBook, "publishingYear" | "shortDescription"> {}

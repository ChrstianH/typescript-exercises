// ** Date-TS-Level-1_1 **

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

document.querySelector(".one")!.innerHTML =
  date1.toString() + ' = new Date("September 2, 2019 09:00:00")';
document.querySelector(".two")!.innerHTML = date2.toString() + " = new Date(0)";
document.querySelector(".three")!.innerHTML =
  date3.toString() + " = new Date(31556908800)";
document.querySelector(".four")!.innerHTML =
  date4.toString() + " = new Date(86400000)";

// ** Date-TS-Level-2_1 **

const today = new Date();
const date: number = today.getDate();
const month: number = today.getMonth();
const year: number = today.getFullYear();
document.querySelector(".five")!.innerHTML = `${date}-${month}-${year}`;
document.querySelector(".six")!.innerHTML = `${date}/${month}/${year}`;
document.querySelector(
  ".seven"
)!.innerHTML = `${today.getHours()}:${today.getMinutes()} Uhr`;
document.querySelector(
  ".eight"
)!.innerHTML = `${today.getUTCHours()}:${today.getUTCMinutes()} Uhr`;

// ** Date-TS-Level-3_2 **

import {
  differenceInYears,
  differenceInHours,
  differenceInSeconds,
  format,
} from "date-fns";
import { de } from "date-fns/locale";

const date01011970 = new Date(0);
const dateToday = new Date();

console.log(differenceInYears(dateToday, date01011970));
console.log(differenceInHours(dateToday, date01011970));
console.log(differenceInSeconds(dateToday, date01011970));

const myBirthday = new Date(1976, 1, 14, 16, 25);
console.log(differenceInYears(dateToday, myBirthday));
const date07042007 = new Date(2007, 3, 7);
console.log(differenceInYears(date07042007, myBirthday));

console.log(format(myBirthday, "dd.MM.yyyy HH:mm:ss"));
console.log(format(myBirthday, "dd.MM.yyyy HH:mm"));
console.log(format(myBirthday, "dd.MM.yyyy"));
console.log(format(myBirthday, "dd.MMMM yyyy", { locale: de }));
console.log(format(myBirthday, "HH:mm"));
console.log(format(myBirthday, "cccc", { locale: de }));
console.log(format(myBirthday, "MMMM", { locale: de }));
console.log(
  format(myBirthday, "dd 'des' MMMM 'im Jahre des Herrn' yyyy", { locale: de })
);

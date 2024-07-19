// String-Methods-TS-Level-1_1

let firstName: string = "Christian";
let lastName: string = "Henschel";

console.log(firstName.length);
console.log(lastName.length);

const fullName: string = firstName.concat(lastName);
console.log(fullName.length);

// String-Methods-TS-Level-1_2

const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

const positionOf_h: number = earthQuote.indexOf("h");
const positionOf_Earth: number = earthQuote.indexOf("Earth");
const positionOf_Moon: number = earthQuote.indexOf("Moon");
console.log(positionOf_h);
console.log(positionOf_Earth);
console.log(positionOf_Moon);

// String-Methods-TS-Level-1_3

let oceanQuote: string =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

const searchSemicolon: number = oceanQuote.search(";");
const searchGreen: number = oceanQuote.search("green");
const searchBlue: number = oceanQuote.search("blue");
console.log(searchSemicolon);
console.log(searchGreen);
console.log(searchBlue);

// String-Methods-TS-Level-1_4

const susisStatus: string = "Susi is going to codingschool";

const sliceSusi: string = susisStatus.slice(0, 4);
const sliceIs: string = susisStatus.slice(5, 7);
const sliceIsGoing: string =
  susisStatus.slice(5, 17) + susisStatus.slice(23, 29);
const sliceSchool: string = susisStatus.slice(23, 29);
const sliceSIS: string = susisStatus.slice(0, 8) + susisStatus.slice(23, 29);

document.querySelector(".susi")!.innerHTML = sliceSusi;
document.querySelector(".is")!.innerHTML = sliceIs;
document.querySelector(".is_going")!.innerHTML = sliceIsGoing;
document.querySelector(".school")!.innerHTML = sliceSchool;
document.querySelector(".sis")!.innerHTML = sliceSIS;

// String-Methods-TS-Level-1_5

const susisStatus2: string = "Susi is back from codingschool";

const sliceSusi2: string = susisStatus2.slice(0, 4);
const sliceIs2: string = susisStatus2.slice(5, 7);
const sliceSchool2: string = susisStatus2.slice(24, 30);
const sliceSIS2: string = susisStatus2.slice(0, 8) + susisStatus2.slice(24, 30);

document.open();
document.write("<br><h2>// String-Methods-TS-Level-1_5</h2><br>");
document.write(sliceSusi2 + " ");
document.write(sliceIs2 + " ");
document.write(sliceSchool2 + " ");
document.write(sliceSIS2 + " ");

// String-Methods-TS-Level-1_6

const susisJob: string = "Sam is working at codingschool";

const sliceSam: string = susisJob.substr(0, 3);
const sliceIs3: string = susisJob.substr(4, 2);
const sliceSchool3: string = susisJob.substr(15, 3) + susisJob.substr(24, 6);
const sliceSWAS: string =
  susisJob.substr(0, 4) +
  susisJob.substr(7, 4) +
  susisJob.substr(5, 1) +
  susisJob.substr(14, 4) +
  susisJob.substr(24, 6);

document.write("<br><h2>// String-Methods-TS-Level-1_6</h2><br>");
document.write(sliceSam + "<br>");
document.write(sliceIs3 + "<br>");
document.write(sliceSchool3 + "<br>");
document.write(sliceSWAS + "<br>");

// String-Methods-TS-Level-1_7

const samsStatus: string = "Sam is good at codingschool";

const replace1: string = samsStatus
  .replace("good", "bad")
  .replace("codingschool", "school");
const replace2: string = samsStatus.replace("codingschool", "school");
const replace3: string = samsStatus.replace("codingschool", "tennis");

document.write("<br><h2>// String-Methods-TS-Level-1_7</h2><br>");
document.write(replace1 + "<br>");
document.write(replace2 + "<br>");
document.write(replace3 + "<br>");

// String-Methods-TS-Level-1_8

const whereIsSam: string = "Sam is going to school";

const whereIsSamUp: string = whereIsSam.toUpperCase();
const whereIsSamLow: string = whereIsSam.toLowerCase();

const whereIsSam1 =
  whereIsSam.substring(0, 3).toUpperCase() +
  whereIsSam.substring(3, 16).toLowerCase() +
  whereIsSam.substring(16).toUpperCase();
const whereIsSam2 =
  whereIsSam.substring(0, 3).toLowerCase() +
  whereIsSam.substring(3, 16).toUpperCase() +
  whereIsSam.substring(16).toLowerCase();
const whereIsSam3 =
  whereIsSam.substr(0, 1).toUpperCase() +
  whereIsSam.substr(1, 3).toLowerCase() +
  whereIsSam.substr(4, 1).toUpperCase() +
  whereIsSam.substr(5, 2).toLowerCase() +
  whereIsSam.substr(7, 1).toUpperCase() +
  whereIsSam.substr(8, 5).toLowerCase() +
  whereIsSam.substr(13, 1).toUpperCase() +
  whereIsSam.substr(14, 2).toLowerCase() +
  whereIsSam.substr(16, 1).toUpperCase() +
  whereIsSam.substr(17).toLowerCase();

document.write("<br><h2>// String-Methods-TS-Level-1_8</h2><br>");
document.write(whereIsSamUp + "<br>");
document.write(whereIsSamLow + "<br>");
document.write(whereIsSam1 + "<br>");
document.write(whereIsSam2 + "<br>");
document.write(whereIsSam3 + "<br>");
document.close();

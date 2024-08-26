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

document.open();
document.write("<br><h2>// String-Methods-TS-Level-1_8</h2><br>");
document.write(whereIsSamUp + "<br>");
document.write(whereIsSamLow + "<br>");
document.write(whereIsSam1 + "<br>");
document.write(whereIsSam2 + "<br>");
document.write(whereIsSam3 + "<br>");
document.write('<br><a href="../strings.html">Back</a>');
document.close();

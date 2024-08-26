// String-Methods-TS-Level-1_7

const samsStatus: string = "Sam is good at codingschool";

const replace1: string = samsStatus
  .replace("good", "bad")
  .replace("codingschool", "school");
const replace2: string = samsStatus.replace("codingschool", "school");
const replace3: string = samsStatus.replace("codingschool", "tennis");

document.open();
document.write("<br><h2>// String-Methods-TS-Level-1_7</h2><br>");
document.write(replace1 + "<br>");
document.write(replace2 + "<br>");
document.write(replace3 + "<br>");
document.write('<br><a href="../strings.html">Back</a>');
document.close();

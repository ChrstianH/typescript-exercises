// String-Methods-TS-Level-1_5

const susisStatus2: string = "Susi is back from codingschool";

const sliceSusi2: string = susisStatus2.substring(0, 4);
const sliceIs2: string = susisStatus2.substring(5, 7);
const sliceSchool2: string = susisStatus2.substring(24, 30);
const sliceSIS2: string =
  susisStatus2.substring(0, 8) + susisStatus2.substring(24, 30);

document.open();
document.write("<br><h2>// String-Methods-TS-Level-1_5</h2><br>");
document.write(sliceSusi2 + "<br>");
document.write(sliceIs2 + "<br>");
document.write(sliceSchool2 + "<br>");
document.write(sliceSIS2 + "<br>");
document.write('<br><a href="../strings.html">Back</a>');
document.close();

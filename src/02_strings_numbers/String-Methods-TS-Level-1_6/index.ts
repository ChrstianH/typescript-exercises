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

document.open();
document.write("<br><h2>// String-Methods-TS-Level-1_6</h2><br>");
document.write(sliceSam + "<br>");
document.write(sliceIs3 + "<br>");
document.write(sliceSchool3 + "<br>");
document.write(sliceSWAS + "<br>");
document.write('<br><a href="../strings.html">Back</a>');
document.close();

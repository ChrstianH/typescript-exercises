// String-Methods-TS-Level-1_4

const susisStatus: string = "Susi is going to codingschool";

const sliceSusi: string = susisStatus.slice(0, 4);
const sliceIs: string = susisStatus.slice(5, 7);
const sliceIsGoing: string =
  susisStatus.slice(5, 17) + susisStatus.slice(23, 29);
const sliceSchool: string = susisStatus.slice(23, 29);
const sliceSIS: string = susisStatus.slice(0, 8) + susisStatus.slice(23, 29);

let el = document.querySelector(".susi") as HTMLParagraphElement;
el.textContent = sliceSusi;
el = document.querySelector(".is") as HTMLParagraphElement;
el.textContent = sliceIs;
el = document.querySelector(".is_going") as HTMLParagraphElement;
el.textContent = sliceIsGoing;
el = document.querySelector(".school") as HTMLParagraphElement;
el.textContent = sliceSchool;
el = document.querySelector(".sis") as HTMLParagraphElement;
el.textContent = sliceSIS;

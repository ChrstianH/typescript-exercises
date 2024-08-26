import IStudent from "./interfaces/IStudents";

const processStudent = (student: IStudent) =>
  console.log(`Processing ${student.name} ...`);

const student1 = { name: "Willi Winzig", age: 22 };
const iStudent1 = student1 as IStudent;

processStudent(iStudent1); // Processing Willi Winzig ...

const student2 = { age: 24 };
const iStudent2 = student2 as IStudent;

processStudent(iStudent2); // Processing undefined ...

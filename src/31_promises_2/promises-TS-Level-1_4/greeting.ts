function sayHello(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Hello! Welcome ${name}!`);
    } else {
      reject("Name fehlt");
    }
  });
}
// const greetingCallback = (message: string) => {
//   console.log(message);
// };

const sayHello1 = sayHello("Christian");
const sayHello2 = sayHello("Anne");
//const sayHello3 = sayHello("");

const divElement = document.querySelector("div") as HTMLDivElement;

Promise.all([sayHello1, sayHello2])
  .then((resp: [string, string]) => {
    const pElement1 = document.createElement("p");
    pElement1.textContent = resp[0] + " Homework   done";
    divElement.appendChild(pElement1);
    const pElement2 = document.createElement("p");
    pElement2.textContent = resp[1] + " Homework   done";
    divElement.appendChild(pElement2);
  })
  .catch((err) => console.error(err));

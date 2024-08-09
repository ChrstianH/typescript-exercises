// Functions-TS-Grundlagen-Level-1_1

function intro1(): void {
  console.log("Hello Function");
}
intro1();

const intro2 = () => console.log("Hello Arrow Function");
intro2();

// Functions-TS-Grundlagen-Level-1_2

// function helloFunc(): void {
//   document.body.innerHTML = "Hallo";
// }
const helloFunc = () => (document.body.innerHTML = "Hallo");

// function sumOf2(zahl1: number, zahl2: number): void {
//   document.body.innerHTML += zahl1 + zahl2;
// }
const sumOf2 = (zahl1: number, zahl2: number) =>
  (document.body.innerHTML += zahl1 + zahl2);

// function productOf2(zahl1: number, zahl2: number): void {
//   window.alert(zahl1 * zahl2);
// }
const productOf2 = (zahl1: number, zahl2: number) =>
  window.alert(zahl1 * zahl2);

// function keysOfObject(object: Object) {
//   console.log(Object.keys(object));
// }
const keysOfObject = (object: Object) => console.log(Object.keys(object));

// Functions-TS-Level-1_6

type Monster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};

function createMonster(
  name: string,
  type: string,
  health: number = 100,
  strength: number = 50,
  speed: number = 25
): Monster {
  const myMonster: Monster = {
    name: name,
    type: type,
    health: health,
    strength: strength,
    speed: speed,
  };

  return myMonster;
}

console.log(createMonster("Alien", "Xenomorph"));
console.log(createMonster("Pale Man", "Ghul", 90));
console.log(createMonster("Godzilla", "Saurier", 90, 100));
console.log(createMonster("Pennywise", "Gestaltwandler", 100, 200, 20));

// Functions-TS-Level-2_2

type NewCustomer = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
};

const formElement = document.getElementById("customer-form") as HTMLFormElement;
const firstNameElement = document.getElementById(
  "firstName"
) as HTMLInputElement;
const lastNameElement = document.getElementById("lastName") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("phone") as HTMLInputElement;

formElement.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  let customer: NewCustomer = {
    firstName: firstNameElement.value,
    lastName: lastNameElement.value,
    email: emailElement.value,
    phone: phoneElement.value,
  };

  console.log(greetUser1(customer));
  document.body.innerHTML += greetUser2(
    customer.firstName,
    customer.lastName,
    customer.email ?? "",
    customer.phone ?? ""
  );
});

function greetUser1(customer: NewCustomer): string {
  let greeting: string = "";
  greeting += `Hello ${customer.firstName} ${customer.lastName}. `;
  if (customer.email === "" && customer.phone === "") {
    greeting += "We will not contact you.";
  } else if (customer.email === "") {
    greeting += `We will contact you via ${customer.phone}.`;
  } else if (customer.phone === "") {
    greeting += `We will contact you via ${customer.email}.`;
  } else {
    greeting += `We will contact you via ${customer.email} and ${customer.phone}.`;
  }
  return greeting;
}

function greetUser2(
  firstName: string,
  lastName: string,
  email: string,
  phone: string
): string {
  let greeting: string = "";
  greeting += `Hello ${firstName} ${lastName}. `;
  if (email === "" && phone === "") {
    greeting += "We will not contact you.";
  } else if (email === "") {
    greeting += `We will contact you via ${phone}.`;
  } else if (phone === "") {
    greeting += `We will contact you via ${email}.`;
  } else {
    greeting += `We will contact you via ${email} and ${phone}.`;
  }
  return greeting;
}

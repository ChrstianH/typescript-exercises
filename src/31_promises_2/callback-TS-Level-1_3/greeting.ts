function sayHello(name: string, callback: (message: string) => void): void {
  callback(`Hello! Welcome ${name}!`);
}

const greetingCallback = (message: string) => console.log(message);

sayHello("Christian", greetingCallback);
sayHello("Anne", greetingCallback);

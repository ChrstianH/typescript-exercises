document.getElementById("startSimulation")?.addEventListener("click", () => {
  const ordersDiv = document.getElementById("orders")!;
  ordersDiv.innerHTML = "";

  createCustomerOrder(1, "Cola", ordersDiv);
  createCustomerOrder(2, "Sprite", ordersDiv);
  createCustomerOrder(3, "Wasser", ordersDiv);
});

function createCustomerOrder(
  customerNumber: number,
  drink: string,
  ordersDiv: HTMLElement
): void {
  const customerDiv = document.createElement("div") as HTMLDivElement;
  ordersDiv.appendChild(customerDiv);
  processOrder(customerNumber, drink, customerDiv);
}

//  hier die einzelnen Functions einfügen, die jeweils ein Promise zurückgeben
function order(
  customerNumber: number,
  customerDiv: HTMLDivElement
): Promise<string> {
  return new Promise((resolve) => {
    const orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = "Bestellung aufnehmen";
    customerDiv.appendChild(orderElem);
    resolve("Bestellung aufnehmen");
  });
}

function pay(customerDiv: HTMLDivElement): Promise<string> {
  return new Promise((resolve) => {
    const orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = "Bezahlung durchführen";
    customerDiv.appendChild(orderElem);
    resolve("Bezahlung durchführen");
  });
}

function makeBurger(customerDiv: HTMLDivElement): Promise<string> {
  return new Promise((resolve) => {
    const orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = "Bereite einen Burger vor";
    customerDiv.appendChild(orderElem);
    console.log("Bereite einen Burger vor");
    setTimeout(() => {
      resolve("Burger fertig");
    }, getRandomDurationInMilliseconds());
  });
}

function makeFries(customerDiv: HTMLDivElement): Promise<string> {
  return new Promise((resolve) => {
    const orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = "Bereite Pommes vor";
    customerDiv.appendChild(orderElem);
    console.log("Bereite Pommes vor");
    setTimeout(() => {
      resolve("Pommes fertig");
    }, getRandomDurationInMilliseconds());
  });
}

function makeDrink(
  drink: string,
  customerDiv: HTMLDivElement
): Promise<string> {
  return new Promise((resolve) => {
    const orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = `Fülle ${drink} ein`;
    customerDiv.appendChild(orderElem);
    console.log(`Fülle ${drink} ein`);
    setTimeout(() => {
      resolve(`${drink} fertig`);
    }, getRandomDurationInMilliseconds());
  });
}

function processOrder(
  customerNumber: number,
  drink: string,
  customerDiv: HTMLDivElement
) {
  Promise.all([
    order(customerNumber, customerDiv),
    pay(customerDiv),
    makeBurger(customerDiv),
    makeFries(customerDiv),
    makeDrink(drink, customerDiv),
  ]).then((resp: [string, string, string, string, string]) => {
    let orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = resp[2];
    customerDiv.appendChild(orderElem);
    orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = resp[3];
    customerDiv.appendChild(orderElem);
    orderElem = document.createElement("p") as HTMLParagraphElement;
    orderElem.textContent = resp[4];
    customerDiv.appendChild(orderElem);

    console.log("Bestellung abgeschlossen.");
    customerDiv.innerHTML += "✅ Bestellung abgeschlossen.<br>";
  });
}

function getRandomDurationInMilliseconds(): number {
  const min = 2000;
  const max = 12000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

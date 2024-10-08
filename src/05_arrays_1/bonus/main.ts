let toDoItems: string[] = [];

function addItem(todoItem: string, atTheBack: boolean): void {
  if (atTheBack) {
    toDoItems.push(todoItem);
  } else {
    toDoItems.unshift(todoItem);
  }
}

function removeItem(atTheBack: boolean): void {
  if (atTheBack) {
    toDoItems.pop();
  } else {
    toDoItems.shift();
  }
}

function addItemAt(todoItem: string, index: number): void {
  toDoItems.splice(index, 0, todoItem);
}

function removeItemAt(index: number): void {
  const zwischenspeicher: string[] = toDoItems.splice(index);
  zwischenspeicher.shift();
  for (let i = 0; i < zwischenspeicher.length; i++) {
    toDoItems.push(zwischenspeicher[i]);
  }
}

function printList(): void {
  console.log(toDoItems);
}

function printPretty() {
  console.log(toDoItems.join(" ** "));
}

function askForUserInput(): void {
  const newInputs: string = window.prompt(
    "Gib 5 ToDo-Items durch Komma getrennt ein"
  )!;
  const newInputArray: string[] = newInputs
    .split(",")
    .map((input) => input.trim());
  if (newInputArray.length === 5) {
    toDoItems = [...toDoItems, ...newInputArray];
  } else {
    window.alert("Die Anzahl der Items ist nicht korrekt.");
  }
}

printList();
addItem("Fitness", true);
printList();
addItem("Wäsche waschen", false);
printList();
addItem("Steuererklärung machen", true);
printList();
addItemAt("Einkaufen", 2);
printList();
addItemAt("Geschirrspüler ausräumen", 1);
printList();
addItem("Staub saugen", false);
printList();
removeItemAt(2);
printList();
removeItem(false);
printPretty();
askForUserInput();
printPretty();

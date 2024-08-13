enum TaskType {
  Urgent = 4,
  NotUrgent = 2,
  Info = 1,
}

type Task = { name: string; type: TaskType };

let n: string = "todo";
let array: string[] = [];
let array2: Task[] = [];

for (let i = 0; i < 3; i++) {
  // Get the input from the user for a task
  const input: string | null = prompt("Bitte geben Sie eine Aufgabe ein:");
  array.push(input || "");
  let inputObject: Task = { name: input || "", type: TaskType.Info };
  array2.push(inputObject);
  // Log the task to the console
  console.log("Aufgabe erstellt " + input + " von " + n);
}

array = array.filter((item: string) => item !== "");

// no good user input - clear the other array too
if (array.length === 0) {
  array2 = [];
}
//not urgent as default - fix later
array2.forEach((task: Task) => {
  task.type = TaskType.NotUrgent;
});

console.log("debug7 - before result outside");

if (
  array.length > 0 &&
  array.length <= 3 &&
  array2.length > 0 &&
  array2.length <= 3
) {
  console.log("Die Anzahl der Aufgaben liegt zwischen 1 und 3.");
} else if (array.length > 0) {
  console.log(
    "Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs."
  );
}

processTasks();

// This function will proces all the tasks
function processTasks(): void {
  //Todo: implement later
  console.log("implement later");
}

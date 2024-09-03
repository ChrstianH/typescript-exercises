import { IToDo } from "./interfaces/IToDo";

const link = "https://jsonplaceholder.typicode.com/todos";
const outputElement = document.getElementById("output") as HTMLDivElement;

fetch(link)
  .then((response: Response) => {
    return response.json();
  })
  .then((data: IToDo[]) => {
    data.sort((d1: IToDo, d2: IToDo) => d1.title.localeCompare(d2.title));
    console.log(data);

    data.forEach((todo: IToDo) => {
      const todoBox = document.createElement("div") as HTMLDivElement;
      todoBox.innerHTML = displayToDo(todo);
      todoBox.style.color = todo.completed ? "green" : "red";
      outputElement.appendChild(todoBox);
    });
  })
  .catch((error: Error) => {
    console.error(error);
  });

function displayToDo(todo: IToDo): string {
  const resultString = `
    <p>User ID: ${todo.userId}</p>
    <p>ID: ${todo.id}</p>
    <p>Title: ${todo.title}</p>
    <p>Completed: ${todo.completed.toString()}</p>
    `;
  return resultString;
}

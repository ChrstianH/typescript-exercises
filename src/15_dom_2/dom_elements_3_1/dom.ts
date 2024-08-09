const formElement = document.getElementById("form_todo") as HTMLFormElement;

const inputElement = document.getElementById("input_todo") as HTMLInputElement;

const output = document.getElementById("output") as HTMLDivElement;

type TodoSchema = {
  todoName: string;
  done: boolean;
  id: number;
};

let todoList: TodoSchema[] = [];

formElement.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  let inputValue = inputElement.value;
  if (inputElement) {
    const todoObject: TodoSchema = {
      todoName: inputValue,
      done: false,
      id: todoList.length + 1,
    };
    todoList.push(todoObject);
    inputValue = "";
    showTodos();
  } else {
    console.log("Du musst etwas eingeben");
  }
});
function showTodos() {
  output.innerHTML = "";
  todoList.forEach((todo: TodoSchema) => {
    const checkboxElement = document.createElement("input") as HTMLInputElement;
    checkboxElement.type = "checkbox";
    checkboxElement.checked = todo.done;
    checkboxElement.addEventListener("change", () => {
      todo.done = checkboxElement.checked;
    });
    const todoElement = document.createElement("p") as HTMLParagraphElement;
    todoElement.innerText = todo.todoName;

    output.appendChild(checkboxElement);
    output.appendChild(todoElement);

    const deleteButton = document.createElement("button") as HTMLButtonElement;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      todoList = todoList.filter((el: TodoSchema) => {
        el.id !== todo.id;
      });
      showTodos();
    });
    output.appendChild(deleteButton);
  });
}

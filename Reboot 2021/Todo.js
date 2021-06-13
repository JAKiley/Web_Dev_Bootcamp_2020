let todoCommand = "";
const todo = [];
while (!(todoCommand.toLowerCase() === "quit")) {
  todoCommand = prompt("Enter ToDo Command");
  if (todoCommand.toLowerCase() === "new") {
    const newTodo = prompt("Enter new Todo");
    todo.push(newTodo.toLowerCase());
    console.log(`${newTodo} added to list`);
  }
  if (todoCommand.toLowerCase() === "delete") {
    const delTodo = parseInt(prompt("Enter the index of the Todo to remove"));
    todo.splice(delTodo, 1);
    console.log("Todo Removed");
  }
  if (todoCommand.toLowerCase() === "list") {
    console.log("***********");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("***********");
  }
}
console.log("To do Quit");

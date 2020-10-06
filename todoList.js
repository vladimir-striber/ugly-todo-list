// Todo list javascript code

let todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      alert("Todo list is empty");
    } else {
      console.log("My todos:");
      const check = String.fromCodePoint(0x2705);
      const cross = String.fromCodePoint(0x274C);
      for (let i = 0; i < this.todos.length; i++) {
        console.log(`todo #${i + 1}:`, this.todos[i].todoText, this.todos[i].completed ? check : cross);

        // the other way:
        // if (this.todos[i].completed === true) {
        //   console.log(`todo #${i + 1}:`, this.todos[i].todoText, check);
        // } else {
        //   console.log(`todo #${i + 1}:`, this.todos[i].todoText, cross);
        // }

      }
    }
  },
  addTodo: function (todoValue) {

    this.todos.push({
      todoText: todoValue,
      completed: false
    });
    // todoValue = "";
    // console.log(todoValue, "value");
    // this.displayTodos();
  },
  changeTodo: function (index, todoText) {
    // index = document.querySelector(".todoItemIndex").value;
    // newValue = document.querySelector(".changedTodoItemValue").value;
    // this.todos[index] = newValue;
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (index) {
    // index = document.querySelector(".deletedTodoItemIndex").value;
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  toggleCompleted: function (index) {
    let todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function () {
    // debugger;
    let completedTodos = [];
    // let completedTodos = 0; // This is different approach
    const totalTodos = this.todos.length;
    // check how many items are completed
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos.push(this.todos[i]);
        // completedTodos++ // This is different approach
      }
    }
    // console.log(completedTodos, "completed");
    // Scenario 1: if all items are not completed - make all of them completed
    if (completedTodos.length < totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
      // console.log("completed < todos");
    }
    // Scenario 2: if all items are completed - make all of them uncompleted
    if (completedTodos.length === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // console.log("completed = todos");
    }
    this.displayTodos();
  }
};

// Old approach

// const displayTodosButton = document.getElementById("displayTodosButton");
// displayTodosButton.addEventListener("click", function () {
//   todoList.displayTodos();
// });
//
// const toggleTodosButton = document.getElementById("toggleAllButton");
// toggleTodosButton.addEventListener("click", function () {
//   todoList.toggleAll();
// });

// New approach

let handlers = {
  addTodo: function () {
    let todoValue = document.querySelector(".todoItem");
    // let todoInput = document.querySelector(".todoItem");

    todoList.addTodo(todoValue.value);
    todoValue.value = "";
  },
  displayTodos: function () {
    todoList.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
  },
  changeTodo: function () {
    let changeTodoIndex = document.querySelector(".todoItemIndex");
    let changeTodoValue = document.querySelector(".changedTodoItemValue");

    // console.log(changeTodoIndex.valueAsNumber, "index value");

    todoList.changeTodo(changeTodoIndex.valueAsNumber, changeTodoValue.value);
    changeTodoIndex.value = "";
    changeTodoValue.value = "";
  }
};

// Method calls
// todoList.displayTodos();
// todoList.addTodo("First object");
// todoList.changeTodo(0, "First object modified");
// todoList.toggleCompleted(0);
// todoList.deleteTodo();


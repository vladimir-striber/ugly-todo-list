// Todo list javascript code

let todoList = {
  todos: [],
  // displayTodos: function () {
  //   if (this.todos.length === 0) {
  //     alert("Todo list is empty");
  //   } else {
  //     console.log("My todos:");
  //     const check = String.fromCodePoint(0x2705);
  //     const cross = String.fromCodePoint(0x274C);
  //     for (let i = 0; i < this.todos.length; i++) {
  //       console.log(`todo #${i + 1}:`, this.todos[i].todoText, this.todos[i].completed ? check : cross);
  //
  //       // the other way:
  //       // if (this.todos[i].completed === true) {
  //       //   console.log(`todo #${i + 1}:`, this.todos[i].todoText, check);
  //       // } else {
  //       //   console.log(`todo #${i + 1}:`, this.todos[i].todoText, cross);
  //       // }
  //
  //     }
  //   }
  // },
  addTodo: function (todoValue) {

    this.todos.push({
      todoText: todoValue,
      completed: false
    });
    // todoValue = "";
    // this.displayTodos();
  },
  changeTodo: function (index, todoText) {
    // index = document.querySelector(".todoItemIndex").value;
    // newValue = document.querySelector(".changedTodoItemValue").value;
    // this.todos[index] = newValue;
    this.todos[index].todoText = todoText;
    // this.displayTodos();
  },
  deleteTodo: function (index) {
    // index = document.querySelector(".deletedTodoItemIndex").value;
    this.todos.splice(index, 1);
    // this.displayTodos();
  },
  toggleCompleted: function (index) {
    let todo = this.todos[index];

    todo.completed = !todo.completed;
    // this.displayTodos();
  },
  toggleAll: function () {
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
    // Scenario 1: if all items are not completed - make all of them completed
    if (completedTodos.length < totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    // Scenario 2: if all items are completed - make all of them uncompleted
    if (completedTodos.length === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    // this.displayTodos();
  }
};

let handlers = {
  addTodo: function () {
    let todoValue = document.querySelector(".todoItem");

    todoList.addTodo(todoValue.value);
    view.displayTodos();
    todoValue.value = "";
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
  changeTodo: function () {
    let changeTodoIndex = document.querySelector(".todoItemIndex");
    let changeTodoValue = document.querySelector(".changedTodoItemValue");

    todoList.changeTodo(changeTodoIndex.valueAsNumber, changeTodoValue.value);
    view.displayTodos();
    changeTodoIndex.value = "";
    changeTodoValue.value = "";
  },
  deleteTodo: function () {
    let deleteTodoIndex = document.querySelector(".deletedTodoItemIndex");

    todoList.deleteTodo(deleteTodoIndex.valueAsNumber);
    deleteTodoIndex.value = "";
  },
  toggleCompleted: function () {
    let toggleTodoIndex = document.querySelector(".toggledTodoItemIndex");

    todoList.toggleCompleted(toggleTodoIndex.valueAsNumber);
    view.displayTodos();
    toggleTodoIndex.value = "";
  }
};

let view = {
  displayTodos: function () {
    // First approach (not quite what we want)
    // let todoLi = document.createElement("li");
    // let todoUl = document.querySelector(".todoUl");
    // let todoValue = document.querySelector(".todoItem");
    // todoLi.innerText = todoValue.value;
    // todoUl.appendChild(todoLi);
    // todoValue.value = "";

    // Second approach
    let todoUl = document.querySelector(".todoUl");
    todoUl.innerHTML = "";
    for (let i = 0; i < todoList.todos.length; i++ ) {
      let todoLi = document.createElement("li");
      let todoCompletedIcon = document.createElement("i");
      const check = String.fromCodePoint(0x2705);
      const cross = String.fromCodePoint(0x274C);

      if (todoList.todos[i].completed === true) {
        todoCompletedIcon.innerText = check
      } else {
        todoCompletedIcon.innerText = cross
      }

      todoLi.textContent = todoList.todos[i].todoText;
      todoLi.appendChild(todoCompletedIcon);
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
    }

  },
  createDeleteButton: function () {
    // debugger;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    return deleteButton;
  },
};

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
    console.log(index, "index from todolist.deleteTodo");
    this.todos.splice(index, 1);
    // this.displayTodos();
    console.log(this.todos);
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
    // for (let i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed) {
    //     completedTodos.push(this.todos[i]);
    //     // completedTodos++ // This is different approach
    //   }
    // }
    this.todos.forEach(function (todo) {
      if (todo.completed) {
        completedTodos.push(todo);
        // completedTodos++ // This is different approach
      }
    });

    // Scenario 1: if all items are not completed - make all of them completed
    // if (completedTodos.length < totalTodos) {
    //   this.todos.forEach(function (todo) {
    //     todo.completed = true;
    //   })
    // }
    // // Scenario 2: if all items are completed - make all of them uncompleted
    // if (completedTodos.length === totalTodos) {
    //   this.todos.forEach(function (todo) {
    //     todo.completed = false;
    //   })
    // }

    this.todos.forEach(function (todo) {
      if (completedTodos.length === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });

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
  deleteTodo: function (index) {
    // let deleteTodoIndex = document.querySelector(".deletedTodoItemIndex");
    //
    todoList.deleteTodo(index);
    view.displayTodos();
    // deleteTodoIndex.value = "";
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
    let todoUl = document.querySelector(".todoUl");
    todoUl.innerHTML = "";

    // for (let i = 0; i < todoList.todos.length; i++ ) {
    //   let todoLi = document.createElement("li");
    //   let todoCompletedIcon = document.createElement("i");
    //   const check = String.fromCodePoint(0x2705);
    //   const cross = String.fromCodePoint(0x274C);
    //
    //   if (todoList.todos[i].completed === true) {
    //     todoCompletedIcon.innerText = check
    //   } else {
    //     todoCompletedIcon.innerText = cross
    //   }
    //
    //   todoLi.id = i;
    //   todoLi.textContent = todoList.todos[i].todoText;
    //   todoLi.appendChild(todoCompletedIcon);
    //   todoLi.appendChild(this.createDeleteButton());
    //   todoUl.appendChild(todoLi);
    // }

    todoList.todos.forEach(function(todo, index) {
      let todoLi = document.createElement("li");
      let todoCompletedIcon = document.createElement("i");
      const check = String.fromCodePoint(0x2705);
      const cross = String.fromCodePoint(0x274C);

      if(todo.completed === true) {
        todoCompletedIcon.innerText = check
      } else {
        todoCompletedIcon.innerText = cross
      }

      debugger;

      todoLi.id = index;
      todoLi.textContent = todo.todoText;
      todoLi.appendChild(todoCompletedIcon);
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
    }, this);

  },
  createDeleteButton: function () {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
    let todoUl = document.querySelector(".todoUl");

    todoUl.addEventListener("click", function (event) {
      console.log(event);
      let elementClicked = event.target;
      console.log(elementClicked, "element clicked");

      // check if element is delete button
      if (elementClicked.className === "deleteButton") {
        console.log("element is delete button");

        let index = elementClicked.parentNode.id;
        console.log(index, "index");

        let indexInt = parseInt(index);
        console.log(indexInt, "indexInt");

        handlers.deleteTodo(indexInt)
      }
    });
  }
};

// Method calls
view.setUpEventListeners();



let todos = [];

let addtodoForm = document.querySelector("#addtodoForm");

let listGroup = document.querySelector(".list-group");

function createListItem(todoValue, todoIndex) {
    // Create li 
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerHTML = todoValue;

    // Create Delete Icon
    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash-alt");
    li.appendChild(icon)

    icon.addEventListener("click", (event) => {
        // Remove LI Form DOM
        event.target.parentElement.remove();
        // Remove Li From Todos Array
        todos.splice(todoIndex, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        // Remove LI Form LocalStorate
    })

    return li;
};


function renderTodos(todos, ) {

    todos.forEach((todo, index)=>{
        let li = createListItem(todo.value, index)
        listGroup.appendChild(li);

    })
};




// Check Is todo Exist in LocalStorage
let storedTodos = localStorage.getItem("todos");
// If Exist
if (storedTodos) {
    let parsedStorage = JSON.parse(storedTodos);
    todos = parsedStorage;
    renderTodos(todos);
};

// JSON.parse todos
// Loop Over Array, Create li Elwment and append to the DOM

addtodoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Access Input tag Values
    let todoValue = addtodoForm.todo.value;
    // Push todo Array
    todos.push({
        value: todoValue,
        Completed: false,
    });

    // Reset value
    addtodoForm.todo.value = "";

    // Create list 
    // Set innerHtml Value
    // Set list-Group-list
    let li = createListItem(todoValue, todos.length -1)
    listGroup.appendChild(li);


    // LocalStor add
    localStorage.setItem("todos", JSON.stringify(todos));

});    
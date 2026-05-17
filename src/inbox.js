const myTodoList = JSON.parse(localStorage.getItem("TodoList")) || [];
const dialog = document.getElementById('dialog');

const addTaskFromPage = document.querySelector('#new-task');
const taskList = document.querySelector('.task-list');

const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');

const form = document.getElementById('task-form');

// create a new todo object with the provided values from the input fields and display it
export function newTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    
    const todo = {
        title: title,
        description: description,
        section: 'inbox',
        dueDate: 'monday',
        priority: 'very Important',
        id: crypto.randomUUID()
    };

    myTodoList.push(todo);
    localStorage.setItem("TodoList", JSON.stringify(myTodoList));

    form.reset();
    dialog.close();

    console.log(myTodoList);
    displayList();
};

export function displayList() { 
    taskList.replaceChildren(); //clear the list
    
// Create a list for every item in the array and set the values from the input field and add it to the UL
    for(const task of myTodoList) {

        const itemList = document.createElement('li'); // create a list for title
        itemList.dataset.id = task.id; // assign the id of the task to title 
        itemList.classList.add('itemList');

        const checkBox = Object.assign(document.createElement('input'), {
            type: 'checkbox',
            className: 'check-box',
            name: 'check-box'
        });

        const itemTitle = document.createElement('p');
        itemTitle.classList.add('itemTitle');
        itemTitle.textContent = `${task.title}`;

        const titleHolder = document.createElement('div');
        titleHolder.classList.add('titleHolder');
        titleHolder.append(checkBox, itemTitle);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('itemDescription');
        itemDescription.textContent = `${task.description}`;

        const dueTime = document.createElement('p');
        dueTime.classList.add('dueTime');
        dueTime.textContent = `${task.dueDate}`;

        const separator = document.createElement('div');
        separator.classList.add('separator');

        itemList.append(titleHolder, itemDescription, dueTime, separator);
        taskList.append(itemList);

/// when checkBox is clicked, delete Item and all it's attribute
        checkBox.addEventListener('click', () => { 
            deleteItem(task.id);
            itemList.remove();
            checkBox.remove();
            taskDisplay();
        });
    };
    taskDisplay();
};

// get the item's ID and deleted it from the Array and update the localStorage
function deleteItem (id) {
    const index = myTodoList.findIndex(b => b.id === id);
    myTodoList.splice(index, 1);
    localStorage.setItem("TodoList", JSON.stringify(myTodoList));
};

// if task-list is empty display content from new-task, else display the content from the array
function taskDisplay () {
    if(taskList.childNodes.length === 0 || myTodoList.length === 0) {
        addTaskFromPage.style.display = 'flex';
    } else {
        addTaskFromPage.style.display = 'none';
    };
};

// cancel task, close the dialog and display what was initially on the screen
export function cancelTask() {
    dialog.close();
    addTaskFromPage.style.display = 'flex';
};

// open the dialog for newTask to be added
export function addTaskFromPageButton() {
    addTaskFromPage.style.display = 'none';
    dialog.showModal();
};

// open the dialog for newTask to be added
export function addTaskSideBar() {
    addTaskFromPage.style.display = 'none';
    dialog.showModal();
};
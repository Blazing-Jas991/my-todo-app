const myTodoList = JSON.parse(localStorage.getItem("TodoList")) || [];
const dialog = document.getElementById('dialog');

const addTaskFromPage = document.querySelector('.new-task');
const taskList = document.querySelector('.task-list');

const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');

const form = document.getElementById('task-form');


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
    
    // create a checkbox
    for(const task of myTodoList) {

        const checkBox = Object.assign(document.createElement('input'), {
            type: 'checkbox',
            className: 'check-box',
            name: 'check-box'
        });

        const itemTitle = document.createElement('li'); // create a list for title
        itemTitle.dataset.id = task.id; // assign the id of the task to title 
        itemTitle.classList.add('itemTitle');
        const titleHolder = document.createElement('div'); 
        titleHolder.classList.add("titleHolder");
        titleHolder.append(checkBox, itemTitle);

        const itemDescription = document.createElement('li');
        itemDescription.classList.add('itemDescription');
        const dueTime = document.createElement('li');
        dueTime.classList.add('dueTime');
        const separator = document.createElement('div');

        separator.classList.add('separator');
        itemTitle.textContent = `${task.title}`;
        itemDescription.textContent = `${task.description}`;
        dueTime.textContent = `${task.dueDate}`;
        taskList.append(titleHolder, itemDescription, dueTime, separator);

        checkBox.addEventListener('click', () => {
            deleteItem(task.id);
            itemDescription.remove();
            itemTitle.remove();
            dueTime.remove();
            separator.remove();
            checkBox.remove();
            
            taskDisplay();
        });
    };
    
};

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

export function cancelTask() {
    dialog.close();
    addTaskFromPage.style.display = 'flex';
};

export function addTaskFromPageButton() {
    addTaskFromPage.style.display = 'none';
    dialog.showModal();
};

export function addTaskSideBar() {
    addTaskFromPage.style.display = 'none';
    dialog.showModal();
};
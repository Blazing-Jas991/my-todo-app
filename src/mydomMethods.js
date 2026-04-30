import { Todo } from "./template.js";

function displayList(listing) {
    const list = document.querySelector('.task-list');
    list.textContent = "";
    for(const task of listing) {
        const checkBox = Object.assign(document.createElement('input'), {
            type: 'checkbox',
            id: 'check-box',
            name: 'check-box'
        });
        const itemTitle = document.createElement('li');
        const titleHolder = document.createElement('div');
        titleHolder.id = 'title-holder';
        titleHolder.append(checkBox, itemTitle);
        const itemDescription = document.createElement('li');
        const dueTime = document.createElement('li');
        const separator = document.createElement('div');
        separator.id = 'separator';
        itemTitle.textContent = `${task.title}`;
        itemDescription.textContent = `${task.description}`;
        dueTime.textContent = `${task.dueDate}`;
        list.append(titleHolder, itemDescription, dueTime, separator);
    };

};

export function newTask() {
    const titleInput = document.querySelector('#title-input');
    const descriptionInput = document.querySelector('#description-input');
    const myTodoList = JSON.parse(localStorage.getItem("displayList")) || [];

    const closeButton = document.querySelector("#add-task");
    closeButton.addEventListener('click', ()=> {
        const form = document.getElementById('task-form');
        const title = titleInput.value;
        const description = descriptionInput.value;
        const todo = new Todo(title, description, 'monday', 'very Important');
        myTodoList.push(todo);
        localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
        
        displayList(myTodoList);
        form.reset();
        console.log(myTodoList);
        dialog.close();
        
    });
};

export function cancelTask() {
    const dialog = document.getElementById('dialog');
    const taskList = document.querySelector('.task-list');
    const newTaskArea = document.querySelector('.new-task');

    if(taskList.textContent === "") {
        newTaskArea.style.display = "";
        dialog.close();
    } else {
        displayList(myTodoList);
        dialog.close();
    };
};

export function addTaskFromPageButton() {
    const dialog = document.getElementById('dialog');
    const container = document.querySelector('.new-task');
    container.style.display = 'none';
    dialog.showModal();
};

export function addTaskSideBar() {
    const dialog = document.getElementById('dialog');
    const container = document.querySelector('.new-task');
    container.style.display = 'none';
    dialog.showModal();
};


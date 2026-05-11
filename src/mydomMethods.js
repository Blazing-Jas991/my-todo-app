import { Todo } from "./template.js";

export const myTodoList = JSON.parse(localStorage.getItem("TodoList")) || [];

export function newTask() {
    const titleInput = document.querySelector('#title-input');
    const descriptionInput = document.querySelector('#description-input');

    const closeButton = document.querySelector("#add-task");
    closeButton.addEventListener('click', ()=> {
        const form = document.getElementById('task-form');
        const title = titleInput.value;
        const description = descriptionInput.value;
        const todo = new Todo(title, description, 'monday', 'very Important');
        myTodoList.push(todo);
        localStorage.setItem("TodoList", JSON.stringify(myTodoList));
        
        displayList();
        form.reset();
        console.log(myTodoList);
        dialog.close();
    });
};

export function displayList() {
    const list = document.querySelector('.task-list'); //Empty UL to store new items
    const container = document.querySelector('.new-task'); 
    list.textContent = "";

    if (myTodoList === "") {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
    
    for(const task of myTodoList) {
        const checkBox = Object.assign(document.createElement('input'), {
            type: 'checkbox',
            id: 'check-box',
            name: 'check-box'
        });
        const itemTitle = document.createElement('li');
        itemTitle.dataset.id = task.id;
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

        checkBox.addEventListener('click', () => {
            console.log(myTodoList);
            const index = myTodoList.findIndex(b => b.id === itemTitle.id);
            myTodoList.splice(index, 1);
            itemDescription.remove();
            itemTitle.remove();
            dueTime.remove();
            separator.remove();
            checkBox.remove();
        });
    };
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


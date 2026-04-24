import { Todo } from "./template.js";

const myTodoList = [];

function addToList(listing) {
    const list = document.querySelector('.task-list');
    list.textContent = "";
    for(const task of listing) {
        let item = document.createElement('li');
        item.textContent = `${task.title}: ${task.description}, ${task.dueDate} and it's ${task.priority}`;
        list.appendChild(item);
    };
};

export function newTask() {
    const titleInput = document.querySelector('#title-input');
    const descriptionInput = document.querySelector('#description-input');

    const closeButton = document.querySelector("#add-task");
    closeButton.addEventListener('click', ()=> {
        const title = titleInput.value;
        const description = descriptionInput.value;
        const todo = new Todo(title, description, 'monday', 'very Important');
        myTodoList.push(todo);
        
        addToList(myTodoList);
        console.log(myTodoList);
        dialog.close();
        
    });
};











// const titleInput = Object.assign(document.createElement('input'), {
//     type: 'text',
//     id: 'title-input',
//     placeholder: 'Name your task',
//     name: 'task-title' });

// const descriptionInput = Object.assign(document.createElement('input'), {
//     type: 'text',
//     id: 'description-input',
//     placeholder: 'Describe your task',
//     name: 'task-description' });

// const closeButton = document.createElement('button');
//     closeButton.textContent = "Add Task";

// export function showDialog() {
//     const dialog = document.createElement('dialog');
//     dialog.id = 'my-dialog';

//     const inputContainer = document.createElement('div');
//     inputContainer.id = 'input-container';
//     const optionsContainer = document.createElement('div');
//     optionsContainer.id = "options-container";
    
//     const dateContainer = document.createElement('div');
//     const attachmentContainer = document.createElement('div');
//     const priorityContainer = document.createElement('div');
//     const reminderContainer = document.createElement('div');
//     optionsContainer.append(dateContainer, attachmentContainer, priorityContainer, reminderContainer);

//     const date = document.createElement('div');
//     date.textContent = 'Date';
//     dateContainer.appendChild(date);
//     const attachment = document.createElement('div');
//     attachment.textContent = 'Attachment';
//     attachmentContainer.appendChild(attachment);
//     const priority = document.createElement('div');
//     priority.textContent = 'Priority';
//     priorityContainer.appendChild(priority);
//     const reminder = document.createElement('div');
//     reminder.textContent = "Reminder";
//     reminderContainer.appendChild(reminder);

//     inputContainer.append(titleInput, descriptionInput);
//     dialog.append(inputContainer, optionsContainer, closeButton);

//     const dialogContainer = document.querySelector('.content-container');
//     dialogContainer.appendChild(dialog);

//     dialog.showModal();
    
//     closeButton.addEventListener('click', ()=> {
//         const title = titleInput.value;
//         const description = descriptionInput.value;
//         const todo = new Todo(title, description, 'monday', 'very Important');
//         myTodoList.push(todo);
        
//         addToList();
//         console.log(myTodoList);
//         dialog.close();
//     });
    
// };


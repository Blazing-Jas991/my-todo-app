
export function showDialog() {
    const dialogContainer = document.querySelector('.content-container');
    const taskContainer = document.querySelector('.new-task');
    const dialog = document.createElement('dialog');
    dialog.id = 'my-dialog';

    const dialogInput = Object.assign(document.createElement('input'), {
    type: 'text',
    id: 'description',
    placeholder: 'Describe your task',
    name: 'task' });

    const optionsContainer = document.createElement('div');
    optionsContainer.id = "options-container";
    const dateContainer = document.createElement('div');
    const attachmentContainer = document.createElement('div');
    const priorityContainer = document.createElement('div');
    const reminderContainer = document.createElement('div');
    optionsContainer.append(dateContainer, attachmentContainer, priorityContainer, reminderContainer);

    const date = document.createElement('div');
    date.textContent = 'Date';
    dateContainer.appendChild(date);
    const attachment = document.createElement('div');
    attachment.textContent = 'Attachment';
    attachmentContainer.appendChild(attachment);
    const priority = document.createElement('div');
    priority.textContent = 'Priority';
    priorityContainer.appendChild(priority);
    const reminder = document.createElement('div');
    reminder.textContent = "Reminder";
    reminderContainer.appendChild(reminder);

    const para = document.createElement('p');
    para.textContent = "This is working now";
    const closeButton = document.createElement('button');
    closeButton.textContent = "Add Task";
    dialog.append(dialogInput, optionsContainer, para, closeButton);
    dialogContainer.appendChild(dialog);
    taskContainer.textContent = "";
    dialog.showModal();

    closeButton.addEventListener('click', ()=> {
        dialog.close();
    });
};


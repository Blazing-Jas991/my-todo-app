const myTodoList = JSON.parse(localStorage.getItem("TodoList")) || [];

const NewTaskBtnContainer = document.querySelector('.new-task');
const dialog = document.getElementById('dialog');
const taskList = document.querySelector('.task-list');

export function newTask() {
    const titleInput = document.querySelector('#title-input');
    const descriptionInput = document.querySelector('#description-input');

    const form = document.getElementById('task-form');
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

    displayList();
    form.reset();
    console.log(myTodoList);
    dialog.close();

};

export function displayList() { 
    taskList.replaceChildren(); //list.textContent = "";
    
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
        taskList.append(titleHolder, itemDescription, dueTime, separator);
    
        checkBox.addEventListener('click', () => {
            console.log(myTodoList);
            const index = myTodoList.findIndex(b => b.id === itemTitle.id);
            myTodoList.splice(index, 1);
            itemDescription.remove();
            itemTitle.remove();
            dueTime.remove();
            separator.remove();
            checkBox.remove();
            localStorage.setItem("TodoList", JSON.stringify(myTodoList));

            if (myTodoList.length === 0) {
                taskList.style.display = 'flex';
            };
        });
    };
};

export function cancelTask() {
    if(taskList.childNodes.length === "") {
        NewTaskBtnContainer.style.display = "block";
        dialog.close();
    } else {
        displayList();
        NewTaskBtnContainer.style.display = "none";
        dialog.close();
    };
};

export function addTaskFromPageButton() {
    NewTaskBtnContainer.style.display = 'none';
    dialog.showModal();
};

export function addTaskSideBar() {
    NewTaskBtnContainer.style.display = 'none';
    dialog.showModal();
};
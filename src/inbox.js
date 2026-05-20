import { getSelectedDate } from "./date-picker.js";
import { format, isAfter, isSameDay } from 'date-fns';
import { dateBtn, dateBtnText } from "./date-picker.js";


export const myTodoList = JSON.parse(localStorage.getItem("TodoList")) || [];

export let currentView = 'inbox';
const dialog = document.getElementById('dialog');
const contentContainer = document.getElementById('content-container');

const addTaskFromPage = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');

const form = document.getElementById('task-form');
const stateDisplayText = document.getElementById('state-display-text');
stateDisplayText.textContent = 'Inbox';

// create a new todo object with the provided values from the input fields and display it
export function newTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    
    const todo = {
        title: title,
        description: description,
        section: 'inbox',
        dueDate: getSelectedDate(),
        priority: 'very Important',
        id: crypto.randomUUID()
    };

    myTodoList.push(todo);

    form.reset();
    dialog.close();

    console.log(myTodoList);
    update();
};

export function displayList(listing) { 
    taskList.replaceChildren(); //clear the list
    
// Create a list for every item in the array and set the values from the input field and add it to the UL
    for(const task of listing) {


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
        itemTitle.textContent = task.title;

        const titleHolder = document.createElement('div');
        titleHolder.classList.add('titleHolder');
        titleHolder.append(checkBox, itemTitle);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('itemDescription');
        itemDescription.textContent = task.description;

        const dueTime = document.createElement('p');
        dueTime.classList.add('dueTime');
        // dueTime.textContent = task.dueDate;
        dueTime.textContent = task.dueDate ? format(new Date(task.dueDate), 'dd - MM - yyyy') : 'No date';

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
    

export function todayTab () {
    const todayList = myTodoList.filter((task) => isSameDay(task.dueDate, new Date()));
    currentView = 'today';
    stateDisplayText.textContent = 'Today';
    displayList(todayList);
};

export function inboxTab () {
    currentView = 'inbox';
    stateDisplayText.textContent = 'Inbox';
    displayList(myTodoList);
};

export function upcomingTab () {
    const upcoming = myTodoList.filter((task) => isAfter(task.dueDate, new Date()));
    currentView = 'upcoming';
    stateDisplayText.textContent = 'Upcoming';
    displayList(upcoming);

}

function update () {
    localStorage.setItem("TodoList", JSON.stringify(myTodoList));

    if (currentView === 'inbox') {
        displayList(myTodoList);
    } else if (currentView === 'today') {
        todayTab();
    } else {
        upcomingTab();
    };

};

// get the item's ID and deleted it from the Array and update the localStorage
function deleteItem (id) {
    const index = myTodoList.findIndex(b => b.id === id);
    myTodoList.splice(index, 1);
    update();
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
    taskDisplay();
    dialog.close();
};

// open the dialog for newTask to be added
export function addTaskFromPageButton() {
    dateBtn.textContent = dateBtnText;
    addTaskFromPage.style.display = 'none';
    dialog.showModal();
};

// open the dialog for newTask to be added
export function addTaskSideBar() {
    dateBtn.textContent = dateBtnText;
    addTaskFromPage.style.display = 'none';
    dialog.showModal();
};



import "./styles.css";
import { newTask,
displayList,
cancelTask, 
addTaskFromPageButton, 
addTaskSideBar, 
myTodoList, 
todayTab, 
inboxTab, 
upcomingTab } 
from "./inbox.js";

import './date-picker.js';

inboxTab();

const inboxSection = document.getElementById('inbox-btn');
inboxSection.addEventListener('click', () => { 
    inboxTab();
});

const todaySection = document.getElementById('today-btn');
todaySection.addEventListener('click', () => { 
    todayTab();
});

const upcomingSection = document.getElementById('upcoming-btn');
upcomingSection.addEventListener('click', () => {
    upcomingTab();
});

const addTask = document.querySelector("#task-form");
addTask.addEventListener('submit', (e) => {
    e.preventDefault();
    newTask();
});

const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', addTaskSideBar);

const secondTaskBtn = document.querySelector('.add-task-button');
secondTaskBtn.addEventListener('click', addTaskFromPageButton);

const cancelButton = document.getElementById('cancel-task');
cancelButton.addEventListener('click', cancelTask);
import "./styles.css";
import { newTask } from "./inbox.js";
import { displayList } from "./inbox.js";
import { cancelTask } from "./inbox.js";
import { addTaskFromPageButton } from "./inbox.js";
import { addTaskSideBar } from "./inbox.js";

displayList();

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener('click', newTask);

const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', addTaskSideBar);

const secondTaskBtn = document.querySelector('.add-task-button');
secondTaskBtn.addEventListener('click', addTaskFromPageButton);

const cancelButton = document.getElementById('cancel-task');
cancelButton.addEventListener('click', cancelTask);

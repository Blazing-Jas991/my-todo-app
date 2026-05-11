import "./styles.css";
import { newTask } from "./mydomMethods.js";
import { cancelTask } from "./mydomMethods.js";
import { addTaskFromPageButton } from "./mydomMethods.js";
import { addTaskSideBar } from "./mydomMethods.js";
import { myTodoList } from "./mydomMethods.js";
import { displayList } from "./mydomMethods.js";

displayList(myTodoList);

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener('click', newTask());

const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', addTaskSideBar);

const secondTaskBtn = document.querySelector('.add-task-button');
secondTaskBtn.addEventListener('click', addTaskFromPageButton);


const cancelButton = document.getElementById('cancel-task');
cancelButton.addEventListener('click', cancelTask);




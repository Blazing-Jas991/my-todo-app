import "./styles.css";
import { newTask } from "./mydomMethods.js";

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener('click', newTask());

const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', ()=> {
    const dialog = document.getElementById('dialog');
    const container = document.querySelector('.new-task');
    container.textContent = "";
    dialog.showModal();
});

const secondTaskBtn = document.querySelector('.add-task-button');
secondTaskBtn.addEventListener('click', ()=> {
    const dialog = document.getElementById('dialog');
    const container = document.querySelector('.new-task');
    container.textContent = "";
    dialog.showModal();
});
import "./styles.css";
import { greeting } from "./template.js";
import { monday } from "./template.js";
import { showDialog } from "./mydomMethods.js";

const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', () => {
    showDialog()
});

const secondTaskButton = document.querySelector('.add-task-button');
secondTaskButton.addEventListener('click', ()=> {
    showDialog();
})

console.log(greeting);
console.log(monday);
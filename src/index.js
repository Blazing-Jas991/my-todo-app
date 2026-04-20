import "./styles.css";
import { greeting } from "./template.js";
import { monday } from "./template.js";
import { showDialog } from "./mydomMethods.js";

const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', showDialog());

console.log(greeting);
console.log(monday);
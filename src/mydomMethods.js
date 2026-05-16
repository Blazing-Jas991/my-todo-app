export function cancelTask() {
    const dialog = document.getElementById('dialog');
    const taskList = document.querySelector('.task-list');
    const newTaskArea = document.querySelector('.new-task');

    if(taskList.childNodes.length === "") {
        newTaskArea.style.display = "";
        dialog.close();
    } else {
        displayList(myTodoList);
        dialog.close();
    };
};

export function addTaskFromPageButton() {
    const dialog = document.getElementById('dialog');
    const container = document.querySelector('.new-task');
    container.style.display = 'none';
    dialog.showModal();
};

export function addTaskSideBar() {
    const dialog = document.getElementById('dialog');
    const container = document.querySelector('.new-task');
    container.style.display = 'none';
    dialog.showModal();
};

export function showDialog() {
    const dialogContainer = document.querySelector('.content-container');
    const dialog = document.createElement('dialog');
    dialog.id = 'my-dialog';
    const para = document.createElement('p');
    para.textContent = "This is working now";
    dialog.appendChild(para);
    dialogContainer.appendChild(dialog);
    dialog.showModal();

    const closeButton = document.createElement('button');
    closeButton.textContent = "Add Task";
    dialog.appendChild(closeButton);
    closeButton.addEventListener('click', ()=> {
        dialog.close();
    })
}
export const greeting = "Hello, Odinite!";

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export const monday = new Todo('Pick Up Ann', 'Pick up Ann from the Airport', 'Thursday', 'Very Important');
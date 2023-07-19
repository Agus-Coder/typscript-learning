interface item {
    id: number,
    title: string,
    status: Status,
    completedOn?: Date,
}

/* 

const ToDoItems: item[] = [

]

*/

enum Status {
    Done = "Done",
    InProgress = "In progress",
    ToDo = "To do"
}

let first: item = {
    id: 1,
    title: "pasear a Fido",
    status: Status.Done,
    completedOn: new Date("2023-01-26")
}

let second: item = {
    id: 2,
    title: "pasear a Fido 2",
    status: Status.Done,
}

let todoList: item[] = [first, second]

function newItem(todo: string):item {

    const id = getNextID(todoList)

    const newTodo = {
        id,
        title: todo,
        status: Status.ToDo
    }

    todoList.push(newTodo)

    return newTodo
}

function getNextID(items : item[]):number {
    return items.reduce((max: number, x) => x.id < max ? max : x.id, 0) + 1
}

newItem("test");

console.log(todoList);

// Correct! Nice work!



interface item {
    id: number,
    title: string,
    status: Status,
    completedOn?: Date,
}

enum Status {
    Done,
    InProgress,
    ToDo
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

function newItem(todo: string) {

    const id = getNextID(todoList)

    const newTodo: item = {
        id,
        title: todo,
        status: Status.ToDo
    }

    todoList.push(newTodo)
}

function getNextID(items) {
    return items.reduce((max: number, x) => x.id > max ? max : x.id, 0) + 1
}

newItem("test");

console.log(todoList);

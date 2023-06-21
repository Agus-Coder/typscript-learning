var Status;
(function (Status) {
    Status[Status["Done"] = 0] = "Done";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["ToDo"] = 2] = "ToDo";
})(Status || (Status = {}));
let first = {
    id: 1,
    title: "pasear a Fido",
    status: Status.Done,
    completedOn: new Date("2023-01-26")
};
let second = {
    id: 2,
    title: "pasear a Fido 2",
    status: Status.Done,
};
let todoList = [first, second];
function newItem(todo) {
    const id = getNextID(todoList);
    const newTodo = {
        id,
        title: todo,
        status: Status.ToDo
    };
    todoList.push(newTodo);
}
function getNextID(items) {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1;
}
newItem("test");
console.log(todoList);

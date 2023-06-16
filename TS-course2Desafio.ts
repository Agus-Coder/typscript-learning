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

let first : item ={
    id:1,
    title: "pasear a Fido",
    status: Status.Done,
    completedOn: new Date("2023-01-26")
}

let second : item ={
    id:2,
    title: "pasear a Fido 2",
    status: Status.Done,
    completedOn: new Date("2023-01-27")
} 

let todoList : item[] = [first, second]

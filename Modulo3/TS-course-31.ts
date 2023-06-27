// enum ContactStatus{
//     Active = "active",
//     Inactive = "inactive",
//     New = "new"
// }

// enum can be tranformed into:

type ContactStatus = "active" | "inactive" | "new"

type contactBirthDate = Date | number | string

interface Contact {
    id: number;
    name: string;
    birthDate?: contactBirthDate;
    status: ContactStatus
}

interface Address {
    street: string;
}

// combination of both interfaces into a new one
type ContactAndAddres = Contact & Address

let contact1 : Contact = {
    id:1,
    name:"nombre",
    birthDate:"2/2/1996",
    status: "new"
}
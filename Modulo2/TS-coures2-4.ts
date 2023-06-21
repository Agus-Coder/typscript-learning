interface Contact {
    id: number,
    name: ContactName,
    status: contactStatus
}

// This is the new property covered in this video //
enum contactStatus {
    Active,
    Inactive,
    new
}

let firstContact: Contact = {
    id: 1,
    name: 'Austin',
    status: contactStatus.Active
}

type ContactName = string
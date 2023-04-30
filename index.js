const contacts = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      return console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

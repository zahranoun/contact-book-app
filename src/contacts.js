const STORAGE_KEY = "contacts";

function loadContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function getContacts() {
  return loadContacts();
}

export function getContact(id) {
  return loadContacts().find((c) => c.id === id);
}

export function addContact(contact) {
  const contacts = loadContacts();
  contact.id = Date.now().toString();
  contacts.push(contact);
  saveContacts(contacts);
}

export function updateContact(updatedContact) {
  const contacts = loadContacts();
  const index = contacts.findIndex((c) => c.id === updatedContact.id);
  if (index !== -1) {
    contacts[index] = updatedContact;
    saveContacts(contacts);
  }
}

export function deleteContact(id) {
  const contacts = loadContacts().filter((c) => c.id !== id);
  saveContacts(contacts);
}

import contactsData from "../data/contacts.json";

export async function getContacts() {
  // simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(contactsData.contacts), 400);
  });
}

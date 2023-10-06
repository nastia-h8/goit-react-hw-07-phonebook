export const checkContactName = (contactList, name) => {
  return contactList.find(
    contact => contact.name.toLowerCase() === name.trim().toLowerCase()
  );
};

export const checkContactNumber = (contactList, number) => {
  const regex = /\D/g;
  return contactList.find(
    contact =>
      contact.number.replace(regex, '') === number.trim().replace(regex, '')
  );
};

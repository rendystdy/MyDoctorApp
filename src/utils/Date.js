const getChatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

const setDateChat = (today) => {
  const years = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return `${years}-${month}-${date}`;
};

export {getChatTime, setDateChat};

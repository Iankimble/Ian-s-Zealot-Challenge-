export const getData = () => {
  return fetch(`https://randomuser.me/api/?results=12`).then((res) => {
    if (res.status >= 400) {
      throw new Error("Could not return data.");
    }
    return res.json();
  });
};

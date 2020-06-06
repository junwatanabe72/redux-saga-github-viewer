import axios from 'axios';
const TOKEN = process.env.REACT_APP_DEV_API_KEY;
const userName = 'junwatanabe72';
const client = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: userName,
    password: TOKEN,
  },
});

export async function getAxios() {
  try {
    const data = await client.get(`/repos/junwatanabe72/linux/issues`);
    return { data };
  } catch (e) {
    return { e };
  }
}

export async function postAxios(data) {
  const queries = { title: data.issue.title, body: data.issue.description };
  try {
    await client.post(`/repos/junwatanabe72/linux/issues`, queries);
    return;
  } catch (e) {
    return { e };
  }
}

export async function putAxios(data) {
  const newData = data.issue;
  for (let key in newData) {
    const id = newData[key].number;
    const queries = {
      title: newData[key].title,
      body: newData[key].body,
      state: newData[key].state,
    };
    try {
      await client.patch(`/repos/junwatanabe72/linux/issues/` + id, queries);
    } catch (e) {
      return { e };
    }
  }
  return;
}

export async function getUserAxios() {
  try {
    const data = await client.get(`/users/junwatanabe72`);
    console.log(data);
    return { data };
  } catch (e) {
    return { e };
  }
}

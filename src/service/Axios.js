import { client, issueURL, issuePutURL, userURL } from '../utils/AxiosConf';
import axios from 'axios';
//fix
export async function getAxios() {
  try {
    const data = await client.get(issueURL);
    return { data };
  } catch (e) {
    return { e };
  }
}

export async function postAxios(data) {
  const queries = { title: data.issue.title, body: data.issue.description };
  try {
    const data = await client.post(issueURL, queries);
    return { data };
  } catch (e) {
    return { e };
  }
}

export async function putAxios(data) {
  const newData = data.issue;
  const id = newData.number;
  const queries = {
    title: newData.title,
    body: newData.body,
    state: newData.state,
  };
  try {
    const data = await client.patch(issuePutURL + id, queries);
    return { data };
  } catch (e) {
    return;
  }
}

export async function getUserAxios() {
  try {
    const data = await client.get(userURL);
    return { data };
  } catch (e) {
    return { e };
  }
}

export async function checkAxios() {
  const baseURL ='https://www.land.mlit.go.jp/webland/api/TradeListSearch?';
  const queries = { params: {from: 20194,to: 20202,city: 13113}};
  try {
    const data = await axios.get(baseURL, queries);
    console.log ({ data });
  } catch (e) {
    console.log ({ e });
  }
}

// export async function putAxios(data) {
//   const newData = data.issue;
//   for (let key in newData) {
//     const id = newData[key].number;
//     const queries = {
//       title: newData[key].title,
//       body: newData[key].body,
//       state: newData[key].state,
//     };
//     try {
//       const data = await client.patch(issuePutURL + id, queries);
//       if (!data) {
//         return;
//       }
//     } catch (e) {
//       return;
//     }
//   }
//   return 1;
// }

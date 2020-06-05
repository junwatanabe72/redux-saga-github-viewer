import React, { useState } from 'react';
import axios from 'axios';

const URL = 'https://api.github.com/repos/junwatanabe72/linux/issues';
const TOKEN = process.env.REACT_APP_DEV_API_KEY;
const userName = 'junwatanabe72';
const client = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: userName,
    password: TOKEN,
  },
});

export async function getAxios(payload) {
  try {
    const data = await client.get(`/repos/junwatanabe72/linux/issues`);
    // console.log(payload);
    return { data };
  } catch (e) {
    return { e };
  }
}

export async function postAxios(data) {
  console.log(data);
  // const queries = { body: data.description };
  const queries = { title: data.issue.title, body: data.issue.description };
  try {
    const data = await client.post(`/repos/junwatanabe72/linux/issues`, queries);
    return { data };
  } catch (e) {
    return { e };
  }
}

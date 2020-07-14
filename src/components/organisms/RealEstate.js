import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  margin: 24px;
  font-size: 14px;
`;

const issueURL = 'https://www.land.mlit.go.jp/webland/api/TradeListSearch';
const from = 20151;
const to = 20152;
const city = '09364';

const queries = {
  from: from,
  to: to,
  city: city,
};
// let redata;

function RealEstate() {
  const [infoRe, setRe] = useState([]);

  async function getRE() {
    const { data } = await axios.get(issueURL, { params: queries });
    let ar = [];
    // console.log(data.data[0]);
    // for (let i = 0; i < index; i++) {
    //   // console.log(typeof data.data[i].Area)
    //   ar.push(data.data[i].Area);
    // }
    // for (const p in ar){
    //   console.log(ar[p])
    // }
    // await console.log(Object.values(ar));
    Object.values(data.data).map((d) => {
      ar.push(d);
    });
    // console.log(ar);
    await setRe(ar);
  }

  useEffect(() => {
    getRE();
    return function cleanup() {
      getRE();
    };
  }, []);
  const list = Object.values(infoRe).map((data) => <li key={'0'}>{data.UnitPrice}</li>);
  console.log(list);
  // const list = infoRe.map((data) => <li>{data}</li>);
  return (
    <Container>
      <ul>{list}</ul>
    </Container>
  );
}

export default RealEstate;

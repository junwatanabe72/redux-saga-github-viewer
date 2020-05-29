import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  height: 200px;
  color: #808080;
  margin: 8px 16px;
  text-align: left;
`;
const StyledP = styled.p`
  color: black;
`;

function ProfileDataB({ userData }) {
  return (
    <Container>
      <p>ユーザ名</p>
      <StyledP>{userData.name}</StyledP>
      <p>メールアドレス</p>
      <StyledP>{userData.email}</StyledP>
    </Container>
  );
}

export default ProfileDataB;

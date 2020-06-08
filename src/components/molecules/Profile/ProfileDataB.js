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
      <p>アカウントURL</p>
      <StyledP>
        <a href={userData.html_url}>{userData.html_url}</a>
      </StyledP>
      <p>フォロー数</p>
      <StyledP>{userData.following}</StyledP>
      <p>フォロワー数</p>
      <StyledP>{userData.followers}</StyledP>
      <p>パブリックレポジトリ数</p>
      <StyledP>{userData.public_repos}</StyledP>
      <p>プライベートレポジトリ数</p>
      <StyledP>{userData.private_gists}</StyledP>
    </Container>
  );
}

export default ProfileDataB;

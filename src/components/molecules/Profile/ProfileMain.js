import React from 'react';
import styled from 'styled-components';
import ProfileData from './ProfileData';
import ProfileDataB from './ProfileDataB';

const Container = styled.div`
  display: flex;
  margin-top: 48px;
  border-radius: 6px;
  border: 1px solid #c0c0c0;
`;

function ProfileMain({ userData }) {
  return (
    <Container>
      <ProfileData userData={userData} />
      <ProfileDataB userData={userData} />
    </Container>
  );
}

export default ProfileMain;

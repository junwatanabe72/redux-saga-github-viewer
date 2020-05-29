import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import ProfileMain from '../molecules/Profile/ProfileMain';

const Container = styled.div`
  margin: 24px;
  font-size: 16px;
`;

function Profile({ userData }) {
  return (
    <Container>
      <Logo name={'Profile'} />
      <ProfileMain userData={userData} />
    </Container>
  );
}

export default Profile;

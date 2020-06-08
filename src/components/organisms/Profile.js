import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import ProfileMain from '../molecules/Profile/ProfileMain';

const Container = styled.div`
  margin: 24px;
  font-size: 14px;
`;

function Profile({ userData, getUser }) {
  //saga
  useEffect(() => {
    document.addEventListener('load', getUser());
    return function cleanup() {
      document.removeEventListener('load', getUser());
    };
  }, []);
  //saga
  return (
    <Container>
      <Logo name={'Profile'} />
      <ProfileMain userData={userData} />
    </Container>
  );
}

export default Profile;

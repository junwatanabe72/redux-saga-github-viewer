import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';

const Container = styled.div`
  width: 50%;
  color: #808080;
  margin: 8px 16px;
  text-align: left;
`;

function ProfileData({ userData }) {
  return (
    <Container>
      <p>プロフィール</p>
      <p>
        <Image width={'256px'} image={userData.avatar_url} />
      </p>
    </Container>
  );
}

export default ProfileData;

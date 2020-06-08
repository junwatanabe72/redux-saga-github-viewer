import React from 'react';
import styled from 'styled-components';
import ProfileData from './ProfileData';
import ProfileDataB from './ProfileDataB';

import { media } from '../../../utils/style-utils';

const Container = styled.div`
  margin-top: 48px;
  border-radius: 6px;
  height: 750px;
  border: 1px solid #c0c0c0;
  ${media.handheld575` 
    display: flex;
    height: 450px;
  `}
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

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

function ComponentFontAwesomeIcon({ head, tail }) {
  return (
    <Container>
      <FontAwesomeIcon icon={(head, tail)} />
    </Container>
  );
}

export default ComponentFontAwesomeIcon;

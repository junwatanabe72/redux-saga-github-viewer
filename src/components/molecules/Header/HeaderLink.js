import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';

const Container = styled.ul`
  display: flex;
`;
const StyledList = styled.li`
  margin: 8px;
`;

function HeaderLink() {
  return (
    <Container>
      <StyledList>
        <LinkButton to={'Issue'} value={'Issue'} color={'white'} />
      </StyledList>
      <StyledList>
        <LinkButton to={'PullRequest'} value={'Pull Request'} color={'white'} />
      </StyledList>
    </Container>
  );
}

export default HeaderLink;

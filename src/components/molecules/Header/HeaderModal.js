import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';

const Container = styled.ul``;

const StyledList = styled.li`
  width: 180px;
  height: 30px;
  margin: 8px 4px;
  }
`;

function HeaderModal() {
  return (
    <Container>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'/'}
          value={'Top'}
          hoverColor={'white'}
          hoverBackgroundColor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'profile'}
          value={'Your Profile'}
          hoverColor={'white'}
          hoverBackgroundColor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'Issue'}
          value={'Issue'}
          hoverColor={'white'}
          hoverBackgroundColor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'PullRequest'}
          value={'Pull Request'}
          hoverColor={'white'}
          hoverBackgroundColor={'#0066ff'}
        />
      </StyledList>
    </Container>
  );
}

export default HeaderModal;

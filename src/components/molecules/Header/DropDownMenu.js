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

function DropDownMenu() {
  return (
    <Container>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'/'}
          value={'Top'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'profile'}
          value={'Your Profile'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'Issue'}
          value={'Issue'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={'13'}
          to={'PullRequest'}
          value={'Pull Request'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
    </Container>
  );
}

export default DropDownMenu;

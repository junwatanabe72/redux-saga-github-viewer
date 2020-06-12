import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';

const Container = styled.ul``;

const StyledFirstList = styled.li`
  width: 180px;
  margin-top: 4px;
  }
`;
const StyledList = styled.li`
  width: 180px;
  }
`;
const StyledLastList = styled.li`
  width: 180px;
  margin-bottom: 4px;
  }
`;
const heightPx = 30;
const fontSize = 13;
function DropDownMenu() {
  return (
    <Container>
      <StyledFirstList>
        <LinkButton
          size={fontSize}
          height={heightPx}
          to={'/'}
          value={'Top'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledFirstList>
      <StyledList>
        <LinkButton
          size={fontSize}
          height={heightPx}
          to={'profile'}
          value={'Your Profile'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          size={fontSize}
          height={heightPx}
          to={'Issue'}
          value={'Issue'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledLastList>
        <LinkButton
          size={fontSize}
          height={heightPx}
          to={'PullRequest'}
          value={'Pull Request'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledLastList>
    </Container>
  );
}

export default DropDownMenu;

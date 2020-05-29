import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 10px;
  padding: 8px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

function TableHeadCheckBoxCell({ propsFunction }) {
  return (
    <StyledTh>
      <input type="checkbox" onChange={propsFunction} />
    </StyledTh>
  );
}

export default TableHeadCheckBoxCell;

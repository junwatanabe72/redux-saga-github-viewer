import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
  max-width: 200px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

function TableDataCell({ propsFunction, value }) {
  return <StyledTd onClick={propsFunction}>{value}</StyledTd>;
}

export default TableDataCell;

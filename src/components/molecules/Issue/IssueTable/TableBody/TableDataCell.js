import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
  max-width: 200px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
// "2020-06-01T05:07:16Z"
const regex = /T[0-9]+\:[0-9]+\:[0-9]+[A-Z]/;
function TableDataCell({ propsFunction, value }) {
  const fixedValue = value.replace(regex, '');
  return <StyledTd onClick={propsFunction}>{fixedValue}</StyledTd>;
}

export default TableDataCell;

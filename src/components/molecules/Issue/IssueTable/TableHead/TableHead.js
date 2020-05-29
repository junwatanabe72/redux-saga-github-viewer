import React from 'react';
import styled from 'styled-components';
import TableHeadCheckBoxCell from './TableHeadCheckBoxCell';
import TableHeadCell from './TableHeadCell';

const StyledTr = styled.tr`
  border-left: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: left;
`;

function TableHead({ propsFunction }) {
  return (
    <thead>
      <StyledTr>
        <TableHeadCheckBoxCell propsFunction={propsFunction} />
        <TableHeadCell value={''} />
        <TableHeadCell value={'ステータス'} />
        <TableHeadCell value={'作成者'} />
        <TableHeadCell value={'作成日付'} />
        <TableHeadCell value={'更新日付'} />
      </StyledTr>
    </thead>
  );
}

export default TableHead;

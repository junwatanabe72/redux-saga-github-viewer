import React from 'react';
import styled from 'styled-components';
import TableHeadCheckBoxCell from './TableHeadCheckBoxCell';

const StyledTr = styled.tr`
  border-left: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: left;
`;

const StyledTh = styled.th`
  font-size: 14px;
  min-width: 148px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

function TableHead({ onChange }) {
  return (
    <thead>
      <StyledTr>
        <TableHeadCheckBoxCell onChange={onChange} />
        <StyledTh>{''}</StyledTh>
        <StyledTh>{'ステータス'}</StyledTh>
        <StyledTh>{'作成者'}</StyledTh>
        <StyledTh>{'作成日付'}</StyledTh>
        <StyledTh>{'更新日付'}</StyledTh>
      </StyledTr>
    </thead>
  );
}

export default TableHead;

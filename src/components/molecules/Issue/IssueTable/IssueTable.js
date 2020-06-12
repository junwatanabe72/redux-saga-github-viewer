import React from 'react';
import styled from 'styled-components';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

const StyledTable = styled.table`
  min-width: 240px;
  border: solid 1px #ccc;
  border-radius: 5px;
`;

function IssueTable({
  onChange,
  serachWord,
  CheckedOrCanceledAll,
  checkedAll,
  data,
  modalPush,
  modalPop,
  putIssue,
}) {
  return (
    <StyledTable>
      <TableHead onChange={CheckedOrCanceledAll} />
      <TableBody
        onChange={onChange}
        serachWord={serachWord}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        putIssue={putIssue}
      />
    </StyledTable>
  );
}

export default IssueTable;

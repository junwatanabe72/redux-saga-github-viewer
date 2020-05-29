import React from 'react';
import styled from 'styled-components';
import TableData from './TableData';

const StyledTd = styled.td`
  padding: 8px;
  margin: 8px;
`;

function TableBody({
  data,
  propsFunction,
  serachWord,
  checkedAll,
  modalPush,
  modalPop,
  updateIssue,
}) {
  const List = Object.values(data).filter((value) => value.title.includes(serachWord));

  return (
    <tbody>
      {List.length > 0 ? (
        List.map((value) => (
          <TableData
            key={value.id}
            value={value}
            propsFunction={propsFunction}
            checkedAll={checkedAll}
            modalPush={modalPush}
            modalPop={modalPop}
            updateIssue={updateIssue}
          />
        ))
      ) : (
        <tr>
          <StyledTd colSpan={'6'}>データがありません。</StyledTd>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;

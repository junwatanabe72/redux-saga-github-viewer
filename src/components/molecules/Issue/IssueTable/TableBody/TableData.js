import React from 'react';
import styled from 'styled-components';
import ModalUpdate from '../../../Modal/ModalUpdate';
import TableDataCheckBoxCell from './TableDataCheckBoxCell';
import TableDataCell from './TableDataCell';

const StyledTr = styled.tr`
  border-top: solid 1px #ccc;
  text-align: left;
  &:hover {
    background-color: #f5f5f5;
  }
`;

function TableData({ value, modalPush, modalPop, propsFunction, checkedAll, updateIssue }) {
  const _modalPush = () =>
    modalPush(<ModalUpdate key={1} modalPop={modalPop} Value={value} updateIssue={updateIssue} />);
  return (
    <StyledTr>
      <TableDataCheckBoxCell value={value} propsFunction={propsFunction} checkedAll={checkedAll} />
      <TableDataCell value={value.title} propsFunction={_modalPush} />
      <TableDataCell value={value.state} propsFunction={_modalPush} />
      <TableDataCell value={value.user.login} propsFunction={_modalPush} />
      <TableDataCell value={value.created_at} propsFunction={_modalPush} />
      <TableDataCell value={value.updated_at} propsFunction={_modalPush} />
    </StyledTr>
  );
}
export default TableData;

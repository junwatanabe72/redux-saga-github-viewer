import React from 'react';
import styled from 'styled-components';
import ModalUpdate from '../../../Modal/ModalUpdate';
import TableDataCheckBoxCell from './TableDataCheckBoxCell';

const StyledTr = styled.tr`
  border-top: solid 1px #ccc;
  text-align: left;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledTd = styled.td`
  max-width: 200px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const regex = /T[0-9]+:[0-9]+:[0-9]+[A-Z]/;

function TableData({ value, modalPush, modalPop, onChange, checkedAll, putIssue }) {
  const _modalPush = () =>
    modalPush(<ModalUpdate key={1} modalPop={modalPop} Value={value} putIssue={putIssue} />);
  const fixedCreateValue = value.created_at.replace(regex, '');
  const fixedUpdateValue = value.updated_at.replace(regex, '');
  const stayOnclick = (e) => e.stopPropagation();
  return (
    <StyledTr>
      <TableDataCheckBoxCell value={value} onChange={onChange} checkedAll={checkedAll} />
      <StyledTd onClick={_modalPush}>
        <a onClick={stayOnclick} href={value.html_url}>
          {value.title}
        </a>
      </StyledTd>
      <StyledTd onClick={_modalPush}>{value.state}</StyledTd>
      <StyledTd onClick={_modalPush}>{value.user.login}</StyledTd>
      <StyledTd onClick={_modalPush}>{fixedCreateValue}</StyledTd>
      <StyledTd onClick={_modalPush}>{fixedUpdateValue}</StyledTd>
    </StyledTr>
  );
}
export default TableData;

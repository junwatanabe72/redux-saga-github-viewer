import React from 'react';
import styled from 'styled-components';
import ModalMain from '../../Modal/ModalMain';
import Button from '../../../atoms/Button';

const Container = styled.div`
  display: flex;
`;

function IssueButtons({
  data,
  modalPush,
  modalPop,
  addIssue,
  removeIssue,
  checkedObject,
  checkedAll,
}) {
  const _modalPush = () => modalPush(<ModalMain addIssue={addIssue} modalPop={modalPop} />);
  // const _deleteIssue =
  //   checkedAll === true ? () => deleteIssue(data) : () => deleteIssue(checkedObject);
  const _deleteIssue = () => removeIssue(checkedObject);
  // const _deleteIssue = () => removeIssue(checkedAll ? data : checkedObject);
  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} propsFunction={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} propsFunction={_deleteIssue} />
    </Container>
  );
}

export default IssueButtons;

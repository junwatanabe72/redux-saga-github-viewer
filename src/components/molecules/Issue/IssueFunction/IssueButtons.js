import React from 'react';
import styled from 'styled-components';
import ModalMain from '../../Modal/ModalMain';
import Button from '../../../atoms/Button';

const Container = styled.div`
  display: flex;
  margin-left: 4px;
`;

function IssueButtons({
  data,
  modalPush,
  modalPop,
  checkedObject,
  checkedAll,
  postIssue,
  putIssue,
}) {
  const _modalPush = () =>
    modalPush(<ModalMain key={2} postIssue={postIssue} modalPop={modalPop} />);

  const List = JSON.parse(JSON.stringify(data));
  const newData = { ...List };
  for (let key in newData) {
    newData[key].state = 'close';
  }
  const _closeIssue = () => putIssue(checkedAll ? newData : checkedObject);

  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} propsFunction={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} propsFunction={_closeIssue} />
    </Container>
  );
}

export default IssueButtons;

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
  checkedObject,
  checkedAll,
  postIssue,
  putIssue,
}) {
  const _modalPush = () =>
    modalPush(<ModalMain key={2} postIssue={postIssue} modalPop={modalPop} />);

  for (let key in data) {
    data[key].state = 'close';
  }
  //modalでcloseする場合と生合成を取るため、object構造を調整する
  const List = Object.values(data);

  const _closeIssue = () => putIssue(checkedAll ? List : checkedObject);

  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} propsFunction={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} propsFunction={_closeIssue} />
    </Container>
  );
}

export default IssueButtons;

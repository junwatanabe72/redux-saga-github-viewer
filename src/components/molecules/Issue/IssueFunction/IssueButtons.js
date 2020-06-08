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
  // const _closeIssue = () => putIssue(checkedAll ? newData : checkedObject);

  const _confirmedPutIssue = async function confirmedPutIssue() {
    if (await window.confirm('削除しますか')) {
      if (checkedAll) {
        putIssue(newData);
        return;
      }
      if (checkedObject.length !== 0) {
        putIssue(checkedObject);
        return;
      }
      await window.alert('削除するissueを選択してください');
      return;
    } else {
      return;
    }
  };

  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} propsFunction={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} propsFunction={_confirmedPutIssue} />
    </Container>
  );
}

export default IssueButtons;

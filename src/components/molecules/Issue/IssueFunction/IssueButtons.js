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

  const _confirmedPutIssue = async function confirmedPutIssue() {
    if (!(await window.confirm('削除しますか'))) {
      return;
    }

    if (checkedAll) {
      for (let key in data) {
        data[key].state = 'close';
        putIssue(data[key]);
      }

      return;
    }

    if (checkedObject.length !== 0) {
      for (let key in checkedObject) {
        console.log(checkedObject[key]);
        checkedObject[key].state = 'close';
        putIssue(checkedObject[key]);
      }
      return;
    } else {
      await window.alert('削除するissueを選択してください');
      return;
    }
  };

  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} onChange={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} onChange={_confirmedPutIssue} />
    </Container>
  );
}

export default IssueButtons;

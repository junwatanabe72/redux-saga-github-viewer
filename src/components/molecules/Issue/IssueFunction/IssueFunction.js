import React from 'react';
import styled from 'styled-components';
import IssueButtons from './IssueButtons';
import Logo from '../../../atoms/Logo';
import Input from '../../../atoms/Input';

const Container = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

function IssueFunction({
  checkedObject,
  propsFunction,
  checkedAll,
  data,
  modalPush,
  modalPop,
  postIssue,
  putIssue,
}) {
  return (
    <Container>
      <Logo name={'Issue'} fontsize={'1.5'} />
      <Input placeHolder={'issue名で検索'} propsFunction={propsFunction} />
      <IssueButtons
        checkedObject={checkedObject}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        postIssue={postIssue}
        putIssue={putIssue}
      />
    </Container>
  );
}

export default IssueFunction;

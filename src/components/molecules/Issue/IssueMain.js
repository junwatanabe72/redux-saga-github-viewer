import React from 'react';
import styled from 'styled-components';
import IssueTable from './IssueTable/IssueTable';

const Container = styled.div`
  max-width: 896px;
  margin: 8px;
  overflow-x: auto;
`;

function IssueMain({
  propsFunction,
  serachWord,
  CheckedOrCanceledAll,
  checkedAll,
  data,
  modalPush,
  modalPop,
  updateIssue,
}) {
  return (
    <Container>
      <IssueTable
        propsFunction={propsFunction}
        serachWord={serachWord}
        CheckedOrCanceledAll={CheckedOrCanceledAll}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        updateIssue={updateIssue}
      />
    </Container>
  );
}

export default IssueMain;

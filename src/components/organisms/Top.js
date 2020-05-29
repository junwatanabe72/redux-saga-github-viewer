import React, { useState } from 'react';
import styled from 'styled-components';
import Issue from '../../container/IssueContainer';
import PullRequest from './Pullrequest';
import ContentChange from '../molecules/Top/ContentChange';

const Container = styled.div`
  padding: 16px;
`;

function Top() {
  const [contentIssue, setContent] = useState(true);

  const changeContent = () => {
    setContent(!contentIssue);
  };

  return (
    <Container>
      <ContentChange contentIssue={contentIssue} changeContent={changeContent} />
      {contentIssue ? <Issue /> : <PullRequest />}
    </Container>
  );
}

export default Top;

import React from 'react';
import styled from 'styled-components';

const ButtonList = styled.ul`
  display: flex;
`;

const Button = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 20px;
  text-align: center;
  border-radius: 6px 6px 0 0;
`;

const IssueButton = styled(Button)`
  color: #808080;
  border-top: ${(props) => (props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-right: ${(props) => (props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-left: ${(props) => (props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-bottom: ${(props) => (props.contentIssue ? '' : '1px solid rgb(225, 228, 232)')};
`;

const PulreqButton = styled(Button)`
  color: #808080;
  border-top: ${(props) => (!props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-right: ${(props) => (!props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-left: ${(props) => (!props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-bottom: ${(props) => (!props.contentIssue ? '' : '1px solid rgb(225, 228, 232)')};
`;

function ContentChange({ contentIssue, changeContent }) {
  return (
    <ButtonList>
      {contentIssue ? (
        <React.Fragment>
          <IssueButton contentIssue={contentIssue}>Issue</IssueButton>
          <PulreqButton contentIssue={contentIssue} onClick={changeContent}>
            Pull Request
          </PulreqButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <IssueButton contentIssue={contentIssue} onClick={changeContent}>
            Issue
          </IssueButton>
          <PulreqButton contentIssue={contentIssue}>Pull Request</PulreqButton>
        </React.Fragment>
      )}
    </ButtonList>
  );
}

export default ContentChange;

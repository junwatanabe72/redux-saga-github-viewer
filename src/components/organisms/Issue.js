import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IssueFunction from '../molecules/Issue/IssueFunction/IssueFunction';
import IssueMain from '../molecules/Issue/IssueMain';

const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
`;

function Issue({ data, modalPush, modalPop, getIssue, postIssue, putIssue }) {
  const [checkedObject, setChecked] = useState([]);
  const [serachWord, setWord] = useState('');
  const [checkedAll, setCheckedAll] = useState(false);
  //checkedAll
  const CheckedOrCanceledAll = () => {
    const newState = { ...checkedObject };
    if (!checkedAll) {
      for (let key in data) {
        newState[key] = data[key];
        setChecked(newState);
      }
    } else {
      for (let key in data) {
        delete newState[key];
        setChecked(newState);
      }
    }
    setCheckedAll(!checkedAll);
  };

  //checkedObject
  const CheckedOrCanceled = (e, b) => {
    if (!b) {
      const newState = { ...checkedObject };
      newState[e.id] = e;
      setChecked(newState);
    } else {
      const newState = { ...checkedObject };
      delete newState[e.id];
      setChecked(newState);
    }
  };
  //serchWord
  const InputWord = (e) => {
    setWord(e.target.value);
  };

  //saga
  useEffect(() => {
    getIssue();
    return function cleanup() {
      getIssue();
    };
  }, []);
  //saga

  return (
    <Container>
      <IssueFunction
        checkedObject={checkedObject}
        onChange={InputWord}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        postIssue={postIssue}
        putIssue={putIssue}
      />

      <IssueMain
        onChange={CheckedOrCanceled}
        serachWord={serachWord}
        CheckedOrCanceledAll={CheckedOrCanceledAll}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        putIssue={putIssue}
      />
    </Container>
  );
}

export default Issue;

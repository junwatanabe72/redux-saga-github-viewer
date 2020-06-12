import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  padding: 8px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

function TableDataCheckBoxCell({ value, onChange, checkedAll }) {
  const [Checked, setChecked] = useState(false);
  const closeValue = { ...value, state: 'close' };
  const changedCheacked = () => {
    setChecked(!Checked);
  };

  const _onChange = () => {
    onChange(closeValue, Checked);
    changedCheacked();
  };
  const _onChangeIre = () => {
    onChange(closeValue, !Checked);
    changedCheacked();
  };

  let Input;

  if (!checkedAll) {
    if (Checked) {
      changedCheacked();
    }
    Input = <input type="checkbox" onClick={_onChange} />;
  } else {
    if (Checked) {
      Input = <input type="checkbox" onClick={_onChangeIre} />;
    } else {
      Input = <input type="checkbox" checked={checkedAll} onClick={_onChangeIre} />;
    }
  }

  return <StyledTh>{Input}</StyledTh>;
}
export default TableDataCheckBoxCell;

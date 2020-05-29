import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  padding: 8px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

function TableDataCheckBoxCell({ value, propsFunction, checkedAll }) {
  const [Checked, setChecked] = useState(false);

  const changedCheacked = () => {
    setChecked(!Checked);
  };

  const _propsFunction = () => {
    propsFunction(value, Checked);
    changedCheacked();
  };
  const _propsFunctionIre = () => {
    propsFunction(value, !Checked);
    changedCheacked();
  };

  let Input;

  if (!checkedAll) {
    if (Checked) {
      changedCheacked();
    }
    Input = <input type="checkbox" onClick={_propsFunction} />;
  } else {
    if (Checked) {
      Input = <input type="checkbox" onClick={_propsFunctionIre} />;
    } else {
      Input = <input type="checkbox" checked={checkedAll} onClick={_propsFunctionIre} />;
    }
  }

  return <StyledTh>{Input}</StyledTh>;
}
export default TableDataCheckBoxCell;

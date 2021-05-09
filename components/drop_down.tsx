import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {Transaction} from '../models/page_content';
import {foregroundColour, colourBlue} from '../styles/global';

type DropDownProps = {
  transactions: Array<Transaction>;
  setList: (list: Array<Transaction>) => void;
};

const Select = styled.select`
  background: ${foregroundColour};
  border-radius: 4px;
  height: 30px;
  width: 170px;
  color: ${colourBlue};
`;

export const DropDown: FunctionComponent<DropDownProps> = ({
  transactions,
  setList,
}) => {
  function handleChange(event) {
    if (!event.target.value) return;
    switch (event.target.value) {
      case -1:
        setList(sortSmallest(transactions));
        break;
      case 1:
        setList(sortLargest(transactions));
        break;
      case 0:
        setList(sortRecent(transactions));
        break;
      default:
        return;
        break;
    }
  }

  return (
    <div>
      <Select onChange={handleChange}>
        <option value={-1}>Smallest Transactions</option>
        <option value={1}>Largest Transactions</option>
        <option value={0}>Most Recent</option>
      </Select>
    </div>
  );
};

export const sortSmallest = (transactions: Array<Transaction>) => {
  return transactions.sort((a, b) => {
    if (Math.abs(a.amount.value) < Math.abs(b.amount.value)) {
      return -1;
    }
    if (Math.abs(a.amount.value) > Math.abs(b.amount.value)) {
      return 1;
    }
    return 0;
  });
};

export const sortLargest = (transactions: Array<Transaction>) => {
  return transactions.sort((a, b) => {
    if (Math.abs(a.amount.value) > Math.abs(b.amount.value)) {
      return -1;
    }
    if (Math.abs(a.amount.value) < Math.abs(b.amount.value)) {
      return 1;
    }
    return 0;
  });
};

export const sortRecent = (transactions: Array<Transaction>) => {
  return transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

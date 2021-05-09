import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {Transaction} from '../models/page_content';
import {
  textSm,
  foregroundColour,
  colourGray,
  colourGreen,
  colourRed,
} from '../styles/global';

type ItemProps = {
  transaction: Transaction;
};

const Container = styled.div`
  background: ${foregroundColour};
  border-radius: 4px;
  display: flex;
  height: 75px;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px;

  p {
    margin: 0;
    padding: 0;
    text-align: ${props => (props.val ? 'right' : 'left')};
  }

  .subtext {
    color: ${colourGray};
    font: ${textSm};
    margin: 0;
    padding: 0;
  }

  .value {
    color: ${props => (props.val > 0 ? colourGreen : colourRed)};
  }
`;

export const Item: FunctionComponent<ItemProps> = ({transaction}) => {
  return (
    <Container>
      <Info>
        <p>{transaction.description}</p>
        <p className="subtext">{transaction.category_title}</p>
      </Info>
      <Info val={transaction.amount.value}>
        <p className="subtext">{transaction.date}</p>
        <p className="value">{transaction.amount.value}</p>
      </Info>
    </Container>
  );
};

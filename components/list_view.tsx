import React, {FunctionComponent, useState, useEffect} from 'react';
import styled from 'styled-components';
import {Transaction} from '../models/page_content';
import {Item} from './list_item';
import {titleBold} from '../styles/global';

const listMax = 10;

type ListProps = {
  title: string;
  transactions: Array<Transaction>;
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

const Title = styled.h2`
  font: ${titleBold};
  margin: 75px 0 25px;
`;

export const ListView: FunctionComponent<ListProps> = ({
  title,
  transactions,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <List>
        {transactions.slice(0, listMax).map(index => (
          <Item key={index.id} transaction={index} />
        ))}
      </List>
    </>
  );
};

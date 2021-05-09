import React from 'react';
import renderer from 'react-test-renderer';
import {ListView} from "../components/list_view";
import 'jest-styled-components';
import {mockTransaction} from './list_item.test'

const mockTransactionsList = [
  mockTransaction,
  mockTransaction,
  mockTransaction,
];

it('Item component matches snapshot', () => {
  const component = renderer.create(
    <ListView title="Recent Transactions" transactions={mockTransactionsList} />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

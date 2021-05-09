import React from 'react';
import renderer from 'react-test-renderer';
import {Item} from "../components/list_item";
import {Transaction} from "../models/page_content";
import 'jest-styled-components';
import moment from 'moment';

export const mockTransaction: Transaction = {
  amount: {
    value: 10,
    currency: 'GBP'
  },
  category_title: 'Travel',
  description: 'Trainline',
  id: 'jdsalfjkejojwefd23254324',
  date: moment("2017-09-15 09:30:00").format("MMM Do YYYY h:mm:ss a"),
}

it('List View component matches snapshot', () => {
  const component = renderer.create(
    <Item transaction={mockTransaction} />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

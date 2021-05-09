import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {Transaction} from '../models/page_content';
import {colourGray, textBold, textSm, colourWhite} from '../styles/global';
import {DropDown} from './drop_down';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const User = styled.a`
  display: flex;
  text-decoration: none;
  color: ${colourWhite};
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font: ${textBold};
    margin: 0 0 5px 0;
  }

  p {
    font: ${textSm};
    color: ${colourGray};
    margin: 0;
  }
`;

const ProfileImg = styled.div`
  height: 75px;
  width: 75px;
  margin-inline-end: 15px;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: 50%;
  }
`;

type HeaderProps = {
  image: string;
  transactions: Array<Transaction>;
  setList: (list: Array<Transaction>) => void;
};

export const Header: FunctionComponent<HeaderProps> = ({
  image,
  transactions,
  setList,
}) => {
  return (
    <Container>
      <User
        href="https://robinw.co.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProfileImg>
          <picture>
            <source srcSet={image + '.webp'} type="image/webp" />
            <img loading="lazy" alt="Profile Picture" srcSet={image + '.jpg'} />
          </picture>
        </ProfileImg>
        <Name>
          <h2>Robin White</h2>
          <p>Software Engineer</p>
        </Name>
      </User>
      <DropDown transactions={transactions} setList={setList} />
    </Container>
  );
};

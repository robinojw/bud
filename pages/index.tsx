import {Wrapper} from '../styles/global';
import React, {useState, useEffect, FunctionComponent} from 'react';
import styled from 'styled-components';

import {Header} from '../components/header';
import {useFetch} from '../hooks/fetch';
import {ListView} from '../components/list_view';
import {Transaction, UserData} from '../models/page_content';
import {sortSmallest} from '../components/drop_down';
import {titleBold, colourBlue, textSm, colourGray} from '../styles/global';

const resource = 'http://www.mocky.io/v2/5c62e7c33000004a00019b05';
const mockImage = 'https://picsum.photos/100/100';

const Info = styled.div`
  margin-top: 25px;

  h2 {
    font: ${titleBold};
    margin: 15px 0 0;
  }

  p {
    color: ${colourGray};
    margin: 5px 0;
  }

  .code {
    color: ${colourBlue};
    font: ${textSm};
    margin-top: 10px;
  }
`;

type HomeProps = {
  content: UserData;
}

const Home: FunctionComponent<HomeProps> = ({ content }) => {
  const [list, setList] = useState<Array<Transaction>>();

  useEffect(() => {
    setList(sortSmallest(content.transactions));
  }, []);

  function handleChange(list: Array<Transaction>) {
    setList([...list]);
  }

  return (
    <>
      <Wrapper>
        {!list ? (
          <div>Loading Content!</div>
        ) : (
          <>
            <Header
              image={mockImage}
              setList={handleChange}
              transactions={list}
            />
            <Info>
              <h2>{content.provider.title}</h2>
              <p>{content.provider.description}</p>
              <p className="code">{content.provider.sort_code}</p>
            </Info>
            <ListView title="Recent Transactions" transactions={list} />
          </>
        )}
      </Wrapper>
    </>
  );
}

/**
 * Hydrate's our app with content at build time, getServerSide props is used
 * for runtime fetching but our data source isn't changing much in this case
 * so no need for unecessary fetches/re-renders.
 * @returns content: UserData
 */
export const getStaticProps = async () => {
  const content = await fetch(resource).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('There was an error fetching data from: ' + resource);
    }
  });

  return {
    props: {content},
  };
}

export default Home;

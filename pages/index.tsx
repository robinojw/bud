import {Wrapper} from '../styles/global';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {Header} from '../components/header';
import {useFetch} from '../hooks/fetch';
import {ListView} from '../components/list_view';
import {Transaction} from '../models/page_content';
import {sortSmallest} from '../components/drop_down';
import {titleBold, colourBlue, textSm, colourGray} from '../styles/global';

const resource = 'http://www.mocky.io/v2/5c62e7c33000004a00019b05';
const mockImage = 'https://picsum.photos/200/300';

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

export default function Home() {
  const [content, loading] = useFetch(resource);
  const [list, setList] = useState<Array<Transaction>>();

  useEffect(() => {
    if (!loading) {
      setList(sortSmallest(content.transactions));
    }
  }, [loading]);

  function handleChange(list: Array<Transaction>) {
    setList([...list]);
  }

  return (
    <>
      <Wrapper>
        {!list || loading ? (
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

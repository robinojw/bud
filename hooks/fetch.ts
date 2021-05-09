import {useEffect, useState} from 'react';
import {UserData} from '../models/page_content';

/**
 * Please note now depreciated! We are now hydrating our React app at build
 * time with getStaticProps. Thought I would leave this here for ref.
 * @param url string, url to fetch data from
 * @returns [data: UserData, loading: boolean]
 */
function useFetch(url: string): [UserData, boolean] {
  const [data, setData] = useState<UserData>();
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const data = await fetch(url).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('There was an error fetching data from: ' + url);
      }
    });
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}

export {useFetch};

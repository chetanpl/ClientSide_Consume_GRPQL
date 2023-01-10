import { useQuery, gql } from "@apollo/client";
import {useState } from 'react';
import { Card } from './components/card';

const PERSONS_QUERY = gql`query GetData($page: Int!, $perPage: Int!) {
  getData(page: $page, perPage: $perPage) {
    address
    email
    name
    phone
  }
}
`;

function App() {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(11);
  const { data, loading, error } = useQuery(PERSONS_QUERY, {
    variables: { page: startPage, perPage: endPage },
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  window.addEventListener("scroll", (e) => {

    const bottom =
      e.target.scrollingElement.scrollHeight -
      e.target.scrollingElement.scrollTop ===
      e.target.scrollingElement.clientHeight;
    if (bottom) {
      const addmore = endPage + 10;
      setStartPage(endPage);
      setEndPage(addmore);
    }
  });
  return (
    <div className="App">
      <Card data={data}></Card>
    </div>
  );
}

export default App;

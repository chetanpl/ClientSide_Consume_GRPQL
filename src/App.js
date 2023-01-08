import { Container, Box, BoxTitle, BoxText } from './profileList.styled'
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react';

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
      <Container>
        {data?.getData.map((box, index) => (
          <Box key={index + box.name} bgColor='lightgray'>
            <BoxTitle>Name<BoxText>{box.name}</BoxText></BoxTitle>
            <BoxTitle>Email Address<BoxText>{box.email}</BoxText></BoxTitle>
            <BoxTitle>Home Address<BoxText>{box.address}</BoxText></BoxTitle>
            <BoxTitle>Phone Number <BoxText>{box.phone}</BoxText></BoxTitle>
          </Box>
        ))}
      </Container>
    </div>
  );
}

export default App;

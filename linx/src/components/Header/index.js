import { Container, Heading } from "react-bulma-components"

export const Header = () => {
  return (
    <Container>
      <Heading color="light">Breweries</Heading>
      <Heading subtitle>A breweries list by Open Brewery DB</Heading>
    </Container>
  );
}
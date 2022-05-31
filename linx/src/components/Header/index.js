import { Container, Heading, Hero } from "react-bulma-components"

export const Header = () => {
  return (
    <Hero color="dark">
      <Container>
        <Hero.Header>
          <Heading size="3" color="light">Breweries</Heading>
          <Heading subtitle>A breweries list by Open Brewery DB</Heading>
        </Hero.Header>
      </Container>
    </Hero>
  );
}
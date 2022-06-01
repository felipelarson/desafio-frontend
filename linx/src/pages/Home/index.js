import { Columns, Container, Hero, Pagination } from 'react-bulma-components';
import { CardComponent } from './../../components/CardComponent';
import { Filter } from './../../components/Filter';
import { FooterComponent } from './../../components/FooterComponent';
import { Header } from './../../components/Header';

export const Home = () => {
  return (
    <div>
      <Hero size="fullheight">

        <Hero.Header>
          <Header />
        </Hero.Header>
        <Container>

          <Filter />

          <Hero.Body>
            <Columns>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>
              <Columns.Column size={'one-quarter'}>
                <CardComponent />
              </Columns.Column>

            </Columns>
          </Hero.Body>

          <Pagination
            py={2}
            current={1}
            total={5}
            showPrevNext={false}
            align="center"
          />

        </Container>
        <Hero.Footer>
          <FooterComponent />
        </Hero.Footer>

      </Hero>
    </div>
  )
}

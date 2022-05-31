import { Hero, Footer, Container, Content } from "react-bulma-components"

export const FooterComponent = () => {
  return (
    <div style={{ margin: '-1rem' }}>
      <Hero size="fullheight">
        <Hero.Header renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <p>
                  Breweries List
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
  )
}

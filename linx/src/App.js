import { Container, Notification } from 'react-bulma-components'

export const App = () => {
  return (
    <div>
      <Container>
        <Notification color="primary">
          This container will strech depending of the breakpoint you choose
        </Notification>
      </Container>
    </div>
  );
}
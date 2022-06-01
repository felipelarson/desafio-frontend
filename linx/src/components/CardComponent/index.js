import { Button, Card, Heading } from 'react-bulma-components'

export const CardComponent = () => {
  return (
    <>
      <Card style={{ width: 300, height: 300 }}>
        <Card.Header.Title>
          <Heading size={4}>John Smith</Heading>
        </Card.Header.Title>
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </Card.Content>
        <Card.Footer>
          <Button size="small" color="primary">teste</Button>
        </Card.Footer>
      </Card>
    </>
  )
}

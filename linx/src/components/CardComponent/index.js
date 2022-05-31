import { Button, Card, Content, Heading, Media } from 'react-bulma-components'

export const CardComponent = () => {
  return (
    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </Content>
      </Card.Content>
      <Card.Footer>
        <Button size="small" color="primary">teste</Button>
      </Card.Footer>
    </Card>
  )
}

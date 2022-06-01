import { Form } from "react-bulma-components"

export const Filter = () => {
  return (
    <Form.Field horizontal pt={2}>
      <Form.Label>
        Filter:
      </Form.Label>
      <Form.Control>
        <Form.Select
          ml={4}
          size="small"
          onChange={function noRefCheck() { }}
          value="option1"
        >
          <option value="option1">
            Option 1
          </option>
          <option value="option2">
            Option 2
          </option>
        </Form.Select>
      </Form.Control>
    </Form.Field>
  )
}

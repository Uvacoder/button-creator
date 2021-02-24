import React, { useState } from "react"
import styled from "@emotion/styled"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import { Input } from "./components/Input"
import { copyToClipboard } from "./utils/copy-to-clipboard"

export const App = () => {
  const [buttonValues, setButtonValues] = useState({
    backgroundColor: "#0097f9",
    borderColor: "#0097f9",
    textColor: "#ffffff",
    backgroundHoverColor: "#0979c3",
    borderWidth: "1",
    borderRadius: "5",
    paddingTopBottom: "5",
    paddingLeftRight: "20",
    fontSize: "16",
    lineHeight: "28",
  })

  const handleInputChange = (event) => {
    event.persist()
    setButtonValues((buttonValues) => ({
      ...buttonValues,
      [event.target.name]: event.target.value,
    }))
  }

  const snippet = `
    <style>
      button {
        background-color: ${buttonValues.backgroundColor};
        color: ${buttonValues.textColor};
        border: ${buttonValues.borderWidth}px solid ${buttonValues.borderColor};
        border-radius: ${buttonValues.borderRadius}px;
        padding: ${buttonValues.paddingTopBottom}px ${buttonValues.paddingLeftRight}px;
        font-size: ${buttonValues.fontSize}px;
        line-height: ${buttonValues.lineHeight}px;
        cursor: pointer;
        position: relative;
        display: block;
      }

      button:hover { background-color: ${buttonValues.backgroundHoverColor}; }
    </style>
  `

  return (
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} xs={12}>
          <Card className="mt-3 mb-3">
            <Card.Body>
              <Card.Title>Button Creator</Card.Title>
              <div className="mb-3">
                <label>Preview:</label>
                <PreviewButton buttonValues={buttonValues}>
                  Click me!
                </PreviewButton>
              </div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Input
                      label="Background Color"
                      name="backgroundColor"
                      type="color"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Input
                      label="Border Color"
                      name="borderColor"
                      type="color"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Input
                      label="Text Color"
                      name="textColor"
                      type="color"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Input
                      label="Hover Color"
                      name="backgroundHoverColor"
                      type="color"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Input
                      label="Border Width"
                      name="borderWidth"
                      type="number"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Input
                      label="Border Radius"
                      name="borderRadius"
                      type="number"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Input
                      label="Padding Top/Bottom"
                      name="paddingTopBottom"
                      type="number"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Input
                      label="Padding Left/Right"
                      name="paddingLeftRight"
                      type="number"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Input
                      label="Font Size"
                      name="fontSize"
                      type="number"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Input
                      label="Line Height"
                      name="lineHeight"
                      type="number"
                      buttonValues={buttonValues}
                      handleInputChange={handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
              <Button
                variant="success"
                block
                onClick={(event) =>
                  copyToClipboard(snippet, event, "Copy snippet")
                }
              >
                Create snippet
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const PreviewButton = styled.button`
  background-color: ${(props) => props.buttonValues.backgroundColor};
  color: ${(props) => props.buttonValues.textColor};
  border: ${(props) => props.buttonValues.borderWidth}px solid
    ${(props) => props.buttonValues.borderColor};
  border-radius: ${(props) => props.buttonValues.borderRadius}px;
  padding: ${(props) => props.buttonValues.paddingTopBottom}px
    ${(props) => props.buttonValues.paddingLeftRight}px;
  font-size: ${(props) => props.buttonValues.fontSize}px;
  line-height: ${(props) => props.buttonValues.lineHeight}px;
  cursor: pointer;
  position: relative;
  display: block;

  &:hover {
    background-color: ${(props) => props.buttonValues.backgroundHoverColor};
  }
`

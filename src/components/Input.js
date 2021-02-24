import React, { Fragment } from "react"
import { InputGroup, FormControl } from "react-bootstrap"

export const Input = ({
  label,
  type,
  name,
  buttonValues,
  handleInputChange,
}) => {
  const value = buttonValues[name]

  return (
    <Fragment>
      <label htmlFor="basic-url">{label}</label>
      <InputGroup className="mb-3">
        {type === "color" && (
          <InputGroup.Prepend>
            <InputGroup.Text>#</InputGroup.Text>
          </InputGroup.Prepend>
        )}

        <FormControl
          name={name}
          value={value}
          onChange={handleInputChange}
          type={type}
        />

        {type === "number" && (
          <InputGroup.Append>
            <InputGroup.Text>px</InputGroup.Text>
          </InputGroup.Append>
        )}
      </InputGroup>
    </Fragment>
  )
}

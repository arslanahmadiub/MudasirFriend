import React from "react";
import Styled from "styled-components";

const Asterisk = Styled.span`
    color: red;
    font-size: 16px;
    font-weight: 600;
    display: ${(props) => (props.show === true ? "" : "none")}
`;
const Label = Styled.label`
    font-size: 14px;
    position:relative; 
    padding: 15 0px;
    top: -5px;
`;

const Input = Styled.input`
    display: block;
    
    font-size: 16px;
    padding: 0 10px;
    font-weight: 400;
    border: 1px solid #ccc;
    border-radius: 10px;
    &:focus {
        border-radius: 10px;
        border: 2px solid lightblue;
        outline-width: 0px;
    }

`;

export default function ({
  value,
  id,
  placeholder,
  onChange,
  onKeyDown,
  label,
  required,
  type,
  width,
  height,
  min,
  max,

  ...props
}) {
  return (
    <Label htmlFor={id}>
      {label && label} <Asterisk show={!!required}>*</Asterisk>
      <Input
        value={value}
        required={!!required}
        placeholder={placeholder || label || ""}
        type={type || "text"}
        id={id}
        min={min || "-100"}
        max={max || "1000"}
        name={props.name || id || ""}
        onChange={onChange && onChange}
        onKeyDown={onKeyDown && onKeyDown}
        style={{
          width: width ? width : "100%",
          height: height ? height : "45px",
        }}
      />
    </Label>
  );
}

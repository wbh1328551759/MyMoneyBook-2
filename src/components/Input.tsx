import styled from 'styled-components';
import React from 'react';

const Label = styled.label`
    display: flex;
    align-items: center;
    color:#9b9b9b;
    >span{ 
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      line-height: 44px;
      border:none;
      background: none;
    }
`;

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) =>{
  const {label,children, ...rest} = props;
  return (
    <Label>
        <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  )
}

export {Input}

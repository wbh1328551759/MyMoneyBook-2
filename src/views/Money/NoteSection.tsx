import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 8px 28px;
  font-size: 14px;
  box-shadow: inset 0 -3px 3px -3px rgba(0,0,0,.3), 
              inset 0 3px 3px -3px rgba(0,0,0,.3);
`;

type Props = {
  value: string,
  onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return(
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}
      placeholder="请输入备注"/>
    </Wrapper>
  )
}
export {NoteSection}
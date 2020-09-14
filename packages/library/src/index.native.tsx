import React from 'react';
import {Button as NativeButton} from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(NativeButton)`
  padding: .5em 1em;
  font-family: sans-serif;
  /* font-size: 1em; */
  font-weight: bold;
  color: blue;
  border-radius: 6px;
  border: 3px solid blue;
  background: #fff;
  :hover {
    color: #fff;
    background-color: blue;
  }
`;

export interface ButtonProps {
  onPress?: () => void;
  children: string;
}

export const Button = ({onPress, children}: ButtonProps) => {
  return ( 
    <StyledButton onPress={onPress || (() => {/* do nothing */})} title={children}/>
  );
}

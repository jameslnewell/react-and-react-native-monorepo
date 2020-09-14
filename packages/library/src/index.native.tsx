import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(View)`
  padding: 5px 10px;
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
}

export const Button: React.FC<ButtonProps> = ({children, onPress}) => {
  return ( 
    <Pressable onPress={onPress}>
      <StyledButton>
        <Text>{children}</Text>
      </StyledButton>
    </Pressable>
  );
}

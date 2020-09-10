import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: .5em 1em;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1em;
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

export const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

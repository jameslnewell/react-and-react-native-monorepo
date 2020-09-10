import React from 'react';
import {Button} from 'library';

export const App: React.FC = () => {
  return (
    <>
      <h1>Product</h1>
      <Button onPress={() => alert('Thanks for buying our product!')}>Buy now!</Button>
    </>
  );
}

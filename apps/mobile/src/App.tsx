import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import {Button} from 'library';

export const App: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <Text>Hello World!</Text>
        <Button>Click Me!</Button>
      </SafeAreaView>
    </>
  );
};

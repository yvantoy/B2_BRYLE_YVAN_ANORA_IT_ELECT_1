// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterApp/>
      <ColorChangerApp/>
    </SafeAreaView>
  );
};

export default App;
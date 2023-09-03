import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './src/Componentes/Text';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});

export default App;

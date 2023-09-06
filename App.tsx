import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text presets="headingLarge" style={{fontFamily: 'Satoshi-Black'}}>
          Seja bem vindo
        </Text>
        <Button mt="s56" mb="s20" title="Entrar" />
        <Button isLoading />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default App;

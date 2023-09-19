import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {EyeOff} from './src/assets/icons/EyeOff';
import {EyeOn} from './src/assets/icons/EyeOn';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text preset="headingLarge">Seja bem vindo</Text>
        <Button variant="outline" mt="s20" mb="s20" title="Entrar" />
        <Button mb="s20" title="Entrar" />
        <Button isLoading />
        {/* <EyeOff size={50} color="red" />
        <EyeOn size={50} color="red" />
        <Button disabled variant="outline" mt="s20" mb="s20" title="Entrar" />
        <Button disabled variant="primary" mb="s20" title="Entrar" /> */}
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

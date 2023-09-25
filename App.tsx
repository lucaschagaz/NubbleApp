import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button';
// import {Icon} from './src/components/Icon';
import {Box} from './src/components/Box';
import {TextInput} from './src/components/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text preset="headingLarge" mb="s10">
            Olá!
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s16">
            <TextInput
              errorMessage="Mensagem de erro"
              label="E-mail"
              placeholder="Digite seu e-mail"
            />
          </Box>
          <Box mb="s8">
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>
          <Text mb="s48" preset="paragraphSmall" bold color="primary">
            Esqueci minha senha
          </Text>
          <Button mb="s12" title="Entrar" />
          <Button title="Criar uma conta" variant="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // flex: 1,
    paddingHorizontal: 24,
  },
});

export default App;

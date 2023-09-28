import React from 'react';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {Screen} from '../../../components/Screen/screen';
import {Icon} from '../../../components/Icon';

export const LoginScreen = () => {
  return (
    <Screen>
      <Text preset="headingLarge" mb="s10">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        errorMessage="Mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon name="eyeOn" />}
        boxProps={{mb: 's10'}}
      />
      <Text mb="s48" preset="paragraphSmall" bold color="primary">
        Esqueci minha senha
      </Text>
      <Button mb="s12" title="Entrar" />
      <Button title="Criar uma conta" variant="outline" />
    </Screen>
  );
};

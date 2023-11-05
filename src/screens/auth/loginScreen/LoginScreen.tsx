import React from 'react';
import {Screen} from '../../../components/Screen/screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {rootParamsList} from '../../../routes/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PasswordTextInput} from '../../../components/PasswordTextInput/PasswordTextInput';

type loginScreenParams = NativeStackScreenProps<rootParamsList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: loginScreenParams) => {
  const navigationToSignUpScreen = () => {
    navigation.navigate('SingUpScreen');
  };

  return (
    <Screen>
      <Text preset="headingLarge" mb="s10">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        boxProps={{mb: 's16'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordTextInput label="Senha" placeholder="Digite sua senha" />
      <Text bold mt="s8" color="primary">
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button
        onPress={navigationToSignUpScreen}
        mt="s12"
        title="Criar uma conta"
        variant="outline"
      />
    </Screen>
  );
};

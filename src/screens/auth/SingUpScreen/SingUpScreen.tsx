import React from 'react';
import {Screen} from '../../../components/Screen/screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {PasswordTextInput} from '../../../components/PasswordTextInput/PasswordTextInput';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootParamsList} from '../../../routes/routes';

type singUpScreenParams = NativeStackNavigationProp<
  rootParamsList,
  'SingUpScreen'
>;

export const SingUpScreen = () => {
  const navigation = useNavigation<singUpScreenParams>();

  const goToSuccessScreen = () => {
    navigation.navigate('SuccessScreen', {
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {name: 'checkRound', color: 'success'},
    });
  };

  return (
    <Screen canGoBack scrolable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput boxProps={{mb: 's16'}} label="Seu useraname" placeholder="@" />
      <TextInput
        boxProps={{mb: 's16'}}
        label="Nome completo"
        placeholder="digite seu nome completo"
      />
      <TextInput
        boxProps={{mb: 's16'}}
        label="E-mail"
        placeholder="digite seu e-mail"
      />

      <PasswordTextInput
        boxProps={{mb: 's48'}}
        label="Senha"
        placeholder="digite sua senha"
      />
      <Button onPress={goToSuccessScreen} title="Criar minha conta" />
    </Screen>
  );
};

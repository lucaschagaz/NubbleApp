import React from 'react';
import {Screen} from '../../../components/Screen/screen';
import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootParamsList} from '../../../routes/routes';
import {Icon} from '../../../components/Icon';

type successScreenParams = NativeStackScreenProps<
  rootParamsList,
  'SuccessScreen'
>;

export const SuccessScreen = ({route}: successScreenParams) => {
  const navigation = useNavigation();

  const goToGome = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button mt="s40" title="Voltar ao inicio" onPress={goToGome} />
    </Screen>
  );
};

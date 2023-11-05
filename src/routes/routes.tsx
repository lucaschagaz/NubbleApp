import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SingUpScreen} from '../screens/auth/SingUpScreen/SingUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {IIconProps} from '../components/Icon';

export type rootParamsList = {
  SingUpScreen: undefined;
  LoginScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IIconProps, 'color' | 'name'>;
  };
};

const Stack = createNativeStackNavigator<rootParamsList>();

export const Router = () => {
  const {Navigator, Screen} = Stack;

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LoginScreen">
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SingUpScreen" component={SingUpScreen} />
        <Screen name="SuccessScreen" component={SuccessScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

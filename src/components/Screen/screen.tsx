import React from 'react';
import {Box, TouchableOpacityBox} from '../Box';
import {useAppSafeArea} from '../../hook/useAppSafeArea';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  ScrollviewComponent,
  ViewComponent,
} from './ScreenComponents/ScreenComponent';
import {useAppTheme} from '../../hook/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface IScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrolable?: boolean;
}

export const Screen = ({
  canGoBack = false,
  children,
  scrolable = false,
}: IScreenProps) => {
  const {top, bottom} = useAppSafeArea();
  const navigation = useNavigation();
  const {colors} = useAppTheme();

  const Component = scrolable ? ScrollviewComponent : ViewComponent;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Component backgroundColor={colors.primaryContrast}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              flexDirection="row"
              mb="s24"
              alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text marginLeft="s8" semiBold preset="paragraphMedium">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Component>
    </KeyboardAvoidingView>
  );
};

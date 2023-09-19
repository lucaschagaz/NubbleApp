import React from 'react';
import {Text} from '../Text';
import {TouchableOpacityBox, touchableOpacityBoxProps} from '../Box';
import {ThemeColors} from '../../theme/theme';
import ActivityIndicator from '../ActivityIndicator';

type buttonPreset = 'primary' | 'outline';

interface buttonUI {
  container: touchableOpacityBoxProps;
  content: ThemeColors;
}

interface IButtonProps extends touchableOpacityBoxProps {
  title?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: buttonPreset;
}

const $buttonVariant: Record<
  buttonPreset,
  {disable: buttonUI; default: buttonUI}
> = {
  primary: {
    default: {
      container: {backgroundColor: 'primary'},
      content: 'primaryContrast',
    },
    disable: {
      container: {backgroundColor: 'gray4'},
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {borderWidth: 1, borderColor: 'primary'},
      content: 'primary',
    },
    disable: {
      container: {borderWidth: 1, borderColor: 'gray2'},
      content: 'gray2',
    },
  },
};

export const Button = ({
  title,
  isLoading,
  disabled,
  variant = 'primary',
  ...touchableOpacityBoxProps
}: IButtonProps) => {
  const btnVariant = $buttonVariant[variant][disabled ? 'disable' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={isLoading || disabled}
      height={50}
      {...btnVariant.container}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {isLoading ? (
        <ActivityIndicator color={btnVariant.content} />
      ) : (
        <Text bold preset="paragraphMedium" color={btnVariant.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};

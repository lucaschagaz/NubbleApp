import {ActivityIndicator} from 'react-native';
import React from 'react';
import {Text} from '../Text';
import {Box, TouchableOpacityBox, touchableOpacityBoxProps} from '../Box';

interface IButtonProps extends touchableOpacityBoxProps {
  title?: string;
  isLoading?: boolean;
}

export const Button = ({
  title,
  isLoading,
  ...touchableOpacityBoxProps
}: IButtonProps) => {
  return (
    <TouchableOpacityBox
      backgroundColor="primary"
      height={50}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text bold preset="paragraphMedium" style={{color: '#FFF'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};

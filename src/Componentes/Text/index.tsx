import {View, Text as RNText, TextProps} from 'react-native';
import React from 'react';

export const Text = ({children, ...rest}: TextProps) => {
  return <RNText {...rest}>{children}</RNText>;
};

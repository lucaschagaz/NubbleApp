import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface iActivityIndicatorProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
}

export default function ActivityIndicator({
  color = 'primary',
}: iActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} />;
}

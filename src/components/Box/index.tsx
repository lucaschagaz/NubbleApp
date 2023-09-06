import React from 'react';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

export const Box = createBox<Theme>();

export type touchableOpacityBoxProps = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  touchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, border, spacing, layout, spacingShorthand],
  TouchableOpacity,
);

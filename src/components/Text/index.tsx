import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React from 'react';

interface TextProps extends RNTextProps {
  preset?: fontVariant;
  italic?: boolean;
  bold?: boolean;
  semiBold?: boolean;
}

export const Text = ({
  children,
  preset = 'headingMedium',
  style,
  italic,
  bold,
  semiBold,
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(italic, semiBold, bold, preset);

  return (
    <RNText style={[$fontSizes[preset], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
};

const getFontFamily = (
  italic?: boolean,
  semiBold?: boolean,
  bold?: boolean,
  preset: fontVariant,
) => {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case italic && bold:
      return $fontFamily.boldItalic;
      break;
    case italic:
      return $fontFamily.italic;
      break;
    case bold:
      return $fontFamily.bold;
      break;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
      break;
    case semiBold:
      return $fontFamily.medium;
      break;
    default:
      return $fontFamily.regular;
      break;
  }
};

type fontVariant =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

const $fontSizes: Record<fontVariant, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};

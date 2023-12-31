import {TextStyle} from 'react-native';
import React from 'react';
import {createText} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: fontVariant;
  italic?: boolean;
  bold?: boolean;
  semiBold?: boolean;
}

export const Text = ({
  children,
  preset = 'paragraphMedium',
  style,
  italic,
  bold,
  semiBold,
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(preset, italic, semiBold, bold);

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rest}>
      {children}
    </SRText>
  );
};

const getFontFamily = (
  preset: fontVariant,
  italic?: boolean,
  semiBold?: boolean,
  bold?: boolean,
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
    case italic:
      return $fontFamily.italic;
    case bold:
      return $fontFamily.bold;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
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

export const $fontSizes: Record<fontVariant, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
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

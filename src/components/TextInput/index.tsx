import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {Box, BoxProps} from '../Box';
import {$fontFamily, $fontSizes, Text} from '../Text';
import {useAppTheme} from '../../hook/useAppTheme';

export interface ITextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export const TextInput = ({
  label,
  errorMessage,
  rightComponent,
  boxProps,
  ...RNTextInoutProps
}: ITextInputProps) => {
  const {colors} = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const $BoxStyle: BoxProps = {
    padding: 's16',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={handleFocus}>
        <Text mb="s4" preset="paragraphMedium" semiBold>
          {label}
        </Text>
        <Box {...$BoxStyle}>
          <RNTextInput
            placeholderTextColor={colors.gray2}
            style={$TextInputStyle}
            ref={inputRef}
            {...RNTextInoutProps}
          />
          {rightComponent && <Box ml="s16">{rightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error" mt="s4">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
};

const $TextInputStyle: TextStyle = {
  padding: 0,
  flex: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

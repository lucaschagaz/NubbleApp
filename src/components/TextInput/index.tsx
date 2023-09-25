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

interface ITextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
}

export const TextInput = ({
  label,
  errorMessage,
  ...RNTextInoutProps
}: ITextInputProps) => {
  const {colors} = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const $BoxStyle: BoxProps = {
    padding: 's16',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  return (
    <Pressable onPress={handleFocus}>
      <Box>
        <Text mb="s4" preset="paragraphMedium">
          {label}
        </Text>
        <Box {...$BoxStyle}>
          <RNTextInput
            placeholderTextColor={colors.gray2}
            style={$TextInputStyle}
            ref={inputRef}
            {...RNTextInoutProps}
          />
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error" mt="s4">
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  );
};

const $TextInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

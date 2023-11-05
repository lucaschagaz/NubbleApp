import React, {useState} from 'react';
import {ITextInputProps, TextInput} from '../TextInput';
import {Icon} from '../Icon';

export const PasswordTextInput = (
  props: Omit<ITextInputProps, 'rightComponent'>,
) => {
  const [secureTextEntryValue, setSecureTextEntryValue] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntryValue(prevState => !prevState);
  };

  return (
    <TextInput
      secureTextEntry={secureTextEntryValue}
      {...props}
      rightComponent={
        <Icon
          name={secureTextEntryValue ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
};

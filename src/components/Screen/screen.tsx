import React from 'react';
import {Box} from '../Box';
import {useAppSafeArea} from '../../hook/useAppSafeArea';

interface IScreenProps {
  children: React.ReactNode;
}

export const Screen = ({children}: IScreenProps) => {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  );
};

import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBaseProps} from '../../components/Icon';
import {useAppTheme} from '../../hook/useAppTheme';
import {Circle} from 'react-native-svg';

export const ErroRoundIcon = ({size = 48, color = 'error'}: IconBaseProps) => {
  const {colors} = useAppTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={colors[color]} />
      <Path
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
};

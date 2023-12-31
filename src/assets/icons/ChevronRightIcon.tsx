import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBaseProps} from '../../components/Icon';
import {useAppTheme} from '../../hook/useAppTheme';

export const ChevronRightIcon = ({
  size = 20,
  color = 'grayBlack',
}: IconBaseProps) => {
  const {colors} = useAppTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7 4L14 10L7 16"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

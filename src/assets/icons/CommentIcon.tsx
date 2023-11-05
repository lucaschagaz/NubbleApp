import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBaseProps} from '../../components/Icon';
import {useAppTheme} from '../../hook/useAppTheme';

export const CommentIcon = ({
  size = 20,
  color = 'grayBlack',
}: IconBaseProps) => {
  const {colors} = useAppTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.28461 20 6.6681 19.5674 5.2558 18.805L1.38416 19.5258C1.13128 19.5729 0.871432 19.4923 0.689541 19.3105C0.50765 19.1286 0.427083 18.8687 0.474166 18.6158L1.19499 14.7442C0.432562 13.3319 0 11.7154 0 10ZM10 1.5607C5.3391 1.5607 1.5607 5.3391 1.5607 10C1.5607 11.5384 1.97165 12.9785 2.68926 14.2191C2.78251 14.3803 2.81503 14.5696 2.78094 14.7527L2.21669 17.7833L5.24735 17.2191C5.43044 17.185 5.61969 17.2175 5.7809 17.3108C7.02143 18.0283 8.46158 18.4393 10 18.4393C14.6608 18.4393 18.4393 14.6608 18.4393 10C18.4393 5.33911 14.6609 1.5607 10 1.5607Z"
        fill={colors[color]}
      />
    </Svg>
  );
};

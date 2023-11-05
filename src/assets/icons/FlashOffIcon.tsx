import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBaseProps} from '../../components/Icon';
import {useAppTheme} from '../../hook/useAppTheme';

export const FlashOffIcon = ({
  size = 20,
  color = 'grayBlack',
}: IconBaseProps) => {
  const {colors} = useAppTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={colors[color]}
        d="M6.54471 2.39631L5.93119 9.8807L5.93063 9.88724C5.91679 10.041 5.96147 10.1752 6.0294 10.2674C6.09498 10.3565 6.1698 10.3934 6.23266 10.4018C6.24095 10.4025 6.24596 10.403 6.24983 10.4033C6.25392 10.4034 6.2593 10.4035 6.26848 10.4037L8.84706 10.3973C9.07482 10.3967 9.2927 10.4903 9.44917 10.6558C9.60564 10.8213 9.6868 11.0441 9.67347 11.2714L9.37025 16.4404C11.1471 13.4507 13.6836 9.16702 13.9916 8.56143C13.9929 8.55877 13.9943 8.55611 13.9957 8.55347C14.1361 8.28468 14.025 7.97586 13.8594 7.86906C13.8119 7.83844 13.7658 7.82684 13.7251 7.82684L10.9626 7.82682C10.6933 7.82682 10.441 7.69555 10.2864 7.47507C10.1319 7.2546 10.0945 6.97261 10.1863 6.71949L11.6758 2.61262C11.7628 2.30559 11.589 2.06097 11.4462 2.00644L11.446 2.00637C11.4179 1.99561 11.3904 1.99084 11.3641 1.99084H6.87539C6.77682 1.99084 6.57314 2.09291 6.54471 2.39631ZM8.05769 18.6461L8.05775 18.646L8.05769 18.6461ZM4.89957 2.25095C4.99059 1.2395 5.78326 0.339294 6.87539 0.339294H11.3641C11.5942 0.339294 11.8213 0.381768 12.0355 0.463619M12.0357 0.463687C13.1013 0.87082 13.5681 2.08457 13.2491 3.11587C13.2452 3.12848 13.241 3.14099 13.2365 3.15339L12.1405 6.17528L13.7251 6.1753C14.0931 6.1753 14.4485 6.28379 14.7546 6.48117L14.7547 6.48125C15.6951 7.08789 15.9611 8.35288 15.4616 9.3141C15.0172 10.1843 10.8134 17.2477 9.47653 19.4914C8.89974 20.4595 7.51181 19.9239 7.57143 18.9026L7.97335 12.051L6.2636 12.0553C6.25765 12.0553 6.25169 12.0552 6.24574 12.0551L6.23975 12.055C6.21719 12.0546 6.18798 12.054 6.15779 12.0524C6.12763 12.0507 6.09854 12.048 6.07606 12.0459L6.07008 12.0453C6.06504 12.0449 6.06001 12.0443 6.05498 12.0438C4.89743 11.9151 4.19052 10.8176 4.2854 9.74289L4.89901 2.25749L4.89957 2.25095"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={colors[color]}
        d="M1.57926 0.579259C1.89917 0.259343 2.41786 0.259343 2.73777 0.579259L17.9632 15.8047C18.2831 16.1246 18.2831 16.6433 17.9632 16.9632C17.6433 17.2831 17.1246 17.2831 16.8047 16.9632L1.57926 1.73778C1.25934 1.41786 1.25934 0.899175 1.57926 0.579259Z"
      />
    </Svg>
  );
};

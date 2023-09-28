import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';

export const useAppSafeArea = () => {
  const {top} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {top: Math.max(top, spacing.s20)};
};

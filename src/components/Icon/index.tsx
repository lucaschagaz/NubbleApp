import React from 'react';

import {EyeOn} from '../../assets/icons/EyeOn';
import {EyeOff} from '../../assets/icons/EyeOff';
import {ThemeColors} from '../../theme/theme';
import {HomeFill} from '../../assets/icons/HomeFill';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {BookmarkFillIcon} from '../../assets/icons/BookmarkFillIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
import {FlashOffIcon} from '../../assets/icons/FlashOffIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {HeartFillIcon} from '../../assets/icons/HeartFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';
import {ArrowRightIcon} from '../../assets/icons/ArrowRightIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {FlashOnIcon} from '../../assets/icons/FlashOnIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {NewPostIcon} from '../../assets/icons/NewPostIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';

export interface IconBaseProps {
  size?: number;
  color?: ThemeColors;
}

interface IIconProps {
  name: Iconsname;
  size?: number;
  color?: ThemeColors;
}

export const Icon = ({name, color, size}: IIconProps) => {
  const SVGIcon = iconsRegistry[name];
  return <SVGIcon size={size} color={color} />;
};

const iconsRegistry = {
  eyeOn: EyeOn,
  eyeOff: EyeOff,
  homeFill: HomeFill,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconsType = typeof iconsRegistry;

type Iconsname = keyof IconsType;

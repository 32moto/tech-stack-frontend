import { Icon } from "./Icon";
import { InfomationIcon } from "./InfomationIcon";

// type
export type ShapeType = 'circle' | 'rouded'
export type SizeType = 'xs' |'s' | 'm' | 'l'

// function
export const getIconSize = (size: SizeType) => {
  switch(size) {
    case 'xs':
      return 30;
    case 's':
      return 45;
    case 'm':
      return 75;
    case 'm':
      return 105;
    default:
      return 75;
  }
}

// components
export {
  Icon,
  InfomationIcon,
}
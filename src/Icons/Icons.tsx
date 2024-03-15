import { AddCircleRounded } from './AddCircleRounded';
import { BoldIcon } from './BoldIcon';
import { ImageIcon } from './ImageIcon';
import { ItalicIcon } from './ItalicIcon';
import { OrderedListIcon } from './OrderedListIcon';
import { UnOrderedListIcon } from './UnOrderedListIcon';
import { UnderLineIcon } from './UnderLineIcon';
import { IconProp, IconVariants } from './types';
const getElement = (variant: IconVariants) => {
  switch (variant) {
    case 'AddCircleRounded':
      return AddCircleRounded;
    case 'Bold':
      return BoldIcon;
    case 'Italic':
      return ItalicIcon;
    case 'UnderLine':
      return UnderLineIcon;
    case 'OrderedList':
      return OrderedListIcon;
    case 'UnOrderedList':
      return UnOrderedListIcon;
    case 'ImagePlaceholder':
      return ImageIcon;
  }
};

export const Icons: React.FC<IconProp> = ({ variant, ...svgProps }) => {
  const Icon = getElement(variant);
  return <Icon {...svgProps} />;
};

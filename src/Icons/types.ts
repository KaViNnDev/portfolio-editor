export type SvgProp = React.SVGProps<SVGSVGElement>;

export type IconVariants =
  | 'AddCircleRounded'
  | 'Bold'
  | 'Italic'
  | 'OrderedList'
  | 'UnOrderedList'
  | 'UnderLine'
  | 'ImagePlaceholder';

export interface IconProp extends SvgProp {
  variant: IconVariants;
}

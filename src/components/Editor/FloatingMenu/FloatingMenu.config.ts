import { FORMAT_TEXT_COMMAND, LexicalCommand, TextFormatType } from 'lexical';
import { IconVariants } from '../../../Icons/types';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';

export type FormattingIcons = Exclude<IconVariants, 'AddCircleRounded'>;

interface FloatingMenuIconsProp {
  variant: FormattingIcons;
  command: LexicalCommand<void | TextFormatType>;
  payload?: TextFormatType;
}

export const FloatingMenuIcons: FloatingMenuIconsProp[] = [
  {
    variant: 'Bold',
    command: FORMAT_TEXT_COMMAND,
    payload: 'bold',
  },
  {
    variant: 'Italic',
    command: FORMAT_TEXT_COMMAND,
    payload: 'italic',
  },
  {
    variant: 'UnderLine',
    command: FORMAT_TEXT_COMMAND,
    payload: 'underline',
  },
  {
    variant: 'OrderedList',
    command: INSERT_ORDERED_LIST_COMMAND,
  },
  {
    variant: 'UnOrderedList',
    command: INSERT_UNORDERED_LIST_COMMAND,
  },
];

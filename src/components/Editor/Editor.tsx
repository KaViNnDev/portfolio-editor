import { EditorState, EditorThemeClasses } from 'lexical';

import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { FloatingMenuPlugin } from './Plugins/FloatingMenuPlugin';
import { ListItemNode, ListNode } from '@lexical/list';
import { HashtagNode } from '@lexical/hashtag';
import { Placeholder } from './Placeholder';
import { Box, SxProps } from '@mui/material';
import { EditorModePlugin } from './Plugins/EditorModePlugin';

const theme: EditorThemeClasses = {
  hashtag: 'editor-hashtag',
  text: {
    bold: 'editor-bold',
    italic: 'editor-italic',
    underline: 'editor-underline',
    highlight: 'editor-hashtag',
  },
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error): void {
  console.error(error);
}

interface EditorProps {
  wrapperStyle?: SxProps;
  isEditable: boolean;
  shouldAutoFocus?: boolean;
  onChange?: (state: EditorState) => void;
}

export const Editor: React.FC<EditorProps> = ({
  wrapperStyle,
  isEditable,
  shouldAutoFocus,
  onChange,
}): JSX.Element => {
  const initialConfig: InitialConfigType = {
    namespace: 'RichTextEditor(RTE)',
    theme,
    onError,
    nodes: [ListNode, ListItemNode, HashtagNode],
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '& > div': {
          outline: 'none',
          border: 'none',
        },
        '& p': {
          margin: '0px',
        },
        ...wrapperStyle,
      }}
    >
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        {shouldAutoFocus === false ? null : <AutoFocusPlugin />}
        <OnChangePlugin
          onChange={(state) => {
            if (onChange !== undefined) onChange(state);
          }}
        />
        <ListPlugin />
        <FloatingMenuPlugin />
        <HashtagPlugin />
        <EditorModePlugin isEditable={isEditable} />
      </LexicalComposer>
    </Box>
  );
};

import { EditorThemeClasses } from 'lexical';

import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { FloatingMenuPlugin } from './Plugins/FloatingMenuPlugin';
import { ListItemNode, ListNode } from '@lexical/list';
import { HashtagNode } from '@lexical/hashtag';
import { Placeholder } from './Placeholder';
import { Box } from '@mui/material';
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

export const Editor = (): JSX.Element => {
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
      }}
    >
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <AutoFocusPlugin />
        <ListPlugin />
        <FloatingMenuPlugin />
        <HashtagPlugin />
        <EditorModePlugin />
      </LexicalComposer>
    </Box>
  );
};

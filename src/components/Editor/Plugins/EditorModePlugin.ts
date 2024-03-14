import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useState } from 'react';

export const EditorModePlugin = (): null => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEditMode, _setIsEditMode] = useState<boolean>(true);
  const [editor] = useLexicalComposerContext();
  editor.setEditable(isEditMode);
  return null;
};

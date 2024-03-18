import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEditMode } from '../../../Hooks/useEditMode';

interface EditorModePluginProps {
  isEditable: boolean;
}

export const EditorModePlugin = ({ isEditable }: EditorModePluginProps): null => {
  const isEditMode = useEditMode();
  const [editor] = useLexicalComposerContext();
  const canEdit = isEditable && isEditMode;
  editor.setEditable(canEdit);
  return null;
};

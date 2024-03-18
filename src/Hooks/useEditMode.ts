import { useSelector } from '../Store/helper';
import { selectMode } from '../Store/modeSlice';

export const useEditMode = (): boolean => useSelector(selectMode) === 'edit';

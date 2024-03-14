import { forwardRef } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FloatingMenuIcons } from './FloatingMenu.config';
import { FloatingMenuWrapper } from './FloatingMenuWrapper';
import { FloatingMenuIcon } from './FloatingMenuIcon';
import { Icons } from '../../../Icons/Icons';
import { Box } from '@mui/material';

export type FloatingMenuCoords = { x: number; y: number } | undefined;

interface FloatingMenuProps {
  editor: ReturnType<typeof useLexicalComposerContext>[0];
  coords: FloatingMenuCoords;
}

export const FloatingMenu = forwardRef<HTMLDivElement, FloatingMenuProps>(
  function FloatingMenu(props, ref) {
    const { editor, coords } = props;
    const shouldShow = coords !== undefined;

    return (
      <Box
        ref={ref}
        aria-hidden={!shouldShow}
        sx={{
          position: 'absolute',
          top: coords?.y,
          left: coords?.x,
          visibility: shouldShow ? 'visible' : 'hidden',
          opacity: shouldShow ? 1 : 0,
        }}
      >
        <FloatingMenuWrapper>
          {FloatingMenuIcons.map(({ variant, command, payload }, index) => {
            const handleClick = (): void => {
              editor.dispatchCommand(command, payload);
            };
            return (
              <FloatingMenuIcon
                key={`${index}_${variant}`}
                handleClick={handleClick}
              >
                <Icons
                  width={'10px'}
                  height={'10px'}
                  variant={variant}
                />
              </FloatingMenuIcon>
            );
          })}
        </FloatingMenuWrapper>
      </Box>
    );
  }
);

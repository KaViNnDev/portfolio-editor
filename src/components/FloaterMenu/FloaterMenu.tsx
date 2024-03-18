import { Box, ClickAwayListener, Grow, Paper, Popper, PopperPlacementType } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface FloaterMenuProps extends PropsWithChildren {
  open: boolean;
  anchorEl: React.RefObject<HTMLButtonElement>;
  handleClose: (event: Event) => void;
  menuPlacement?: PopperPlacementType;
}

export const FloaterMenu: React.FC<FloaterMenuProps> = ({
  handleClose,
  open,
  anchorEl,
  children,
  menuPlacement,
}) => {
  return (
    <Popper
      sx={({ zIndex }) => ({
        zIndex: zIndex.tooltip,
      })}
      open={open}
      anchorEl={anchorEl.current}
      transition
      disablePortal
      placement={menuPlacement}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper
            sx={{
              boxShadow: 'none',
              my: '25px',
              background: 'transparent',
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <Box>{children}</Box>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

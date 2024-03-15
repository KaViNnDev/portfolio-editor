import { Typography } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../Theme/colors';

export const BodyFont = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.black};
  }
`;

export const NavFont = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 12.8px;
    line-height: 24px;
    color: ${Colors.white};
  }
`;

export const PlaceholderFont = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: ${Colors.black};
  }
`;

import { Typography } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../Theme/colors';

export const BodyFont = styled(Typography)`
  && {
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -2%;
    color: ${Colors.black};
  }
`;

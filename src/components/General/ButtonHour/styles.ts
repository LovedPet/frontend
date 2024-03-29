import styled from 'styled-components';
import { darken } from 'polished';
import { colors, colorWithTransparency } from '../../../styles/colors';

interface ButtonContainerProps {
  decline: boolean;
  isDisabled: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 600;
  height: 44px;
  width: 64px;
  margin: 7px;
  background: ${({ decline }) =>
    decline ? colors.errorBorder : colors.primary};
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 200ms ease-in-out;
  :hover {
    background-color: ${({ decline }) =>
      decline
        ? darken(0.05, colors.errorBorder)
        : darken(0.05, colors.primary)};
  }
`;

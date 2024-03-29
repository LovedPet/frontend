import styled from 'styled-components';
import { darken } from 'polished';
import { colors, colorWithTransparency } from '../../styles/colors';


interface ButtonContainerProps {
  decline: boolean;
  isDisabled: boolean;
}

export const ButtonHour = styled.button`
  display: grid;
  place-items: center;
  color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  height: 34px;
  width: 456px;
  background: ${colors.primary};
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 200ms ease-in-out;
`;

export const PetInfo = styled.div`
  border-radius: 8px;
  padding: 15px;
  background-color: ${colors.offWhite};
`

import { parseToRgb } from 'polished';

export const colors = {
  primary: '#DA7474',
  lightPrimary: '#CAE4DB',
  black: '#131735',
  kindaGrey: '#4E5268',
  error: '#CD3A28',
  normalBorder: 'rgba(42, 70, 112, 0.1)',
  errorBorder: '#EE6352',
  focusBorder: 'rgba(4, 167, 119, 0.5)',
  link: '#0773C1',
  white: '#FFF',
  offWhite: '#EEE',
  darkGrey: '#888997',
  grey: '#7C7F8E',
  lightGrey: '#f0f1f5',

  // Switch
  switchBackground: '#04A777',
  activeBackground: 'rgba(6, 113, 81, 0.5)',
  deactivatedBackground: 'rgba(131, 131, 131, 0.6)',
  lightShadow: 'rgba(0, 0, 0, 0.15)',

  // Grades
  plus900: '#DA7474',
  plus800: '#169E94',
  plus700: '#2796B0',
  plus600: '#398ECC',
  plus500: '#4A86E8',
  minus500: '#EE6352',

  // Menu
  menuBackground: '#FCFAF9',
  menuShadow: 'rgba(24, 50, 115, 0.03)',

  // Star
  yellow: '#FFD700',
};

export const gradeColors = {
  plus900: '#DA7474',
  plus800: '#169E94',
  plus700: '#2796B0',
  plus600: '#398ECC',
  plus500: '#4A86E8',
  minus500: '#EE6352',
  noGrade: '#bdbdbd',
};

export const colorWithTransparency = (
  color: string,
  transparency: number,
): string => {
  const { red, green, blue } = parseToRgb(color);

  const transparentColor = `rgba(${red}, ${green}, ${blue}, ${transparency})`;

  return transparentColor;
};

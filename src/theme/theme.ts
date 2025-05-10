/**
 * @format
 */
import {extendTheme} from 'native-base';

const newColorTheme = {
  primary: {
    50: '#d9f7ff',
    100: '#ace1ff',
    200: '#7cccff',
    300: '#49b7ff',
    400: '#1aa2ff',
    500: '#0089e6',
    600: '#006ab4',
    700: '#004c82',
    800: '#002e51',
    900: '#001021',
    1000: '#DE5B57',
  },
  black: {
    40: '#000000',
    50: '#E5E5E5',
    100: '#BABABA',
    150: 'rgba(49, 49, 51, 0.5);',
    200: '#e8e8e8',
    250: '#f5f5f5',
    300: '#A4A4A4',
    400: '#959699',
    500: '#818488',
    600: '#25262A',
    700: '#333',
    750: '#212121',
    800: '#ccc',
    850: '#2C2C2C',
    900: '#26323F',
    950: '#231F20',
    1000: '#26323F',
    2000: '#000',
    3000: '#313133',
    4000: '#000000',
    5000: '#BDBDBD',
    6000: '#454547',
    7000: '#424746',
  },
  red: {
    500: '#DF5664',
    600: '#DF5A56',
    700: '#dc3545',
    800: '#DF5A56',
    900: '#FF0000',
  },
  gray: {
    100: '#EDEEEE',
    150: 'rgba(0,0,0,0.4)',
    200: '#969596',
    300: '#a1a1a1',
    400: '#A9A9A9',
    500: '#d3d3d3',
    600: '#5A6078',
    700: '#313534',
    750: '#424242',
    800: '#DEDEDE',
    900: '#6c757d',
    950: '#D9D9D9',
    1000: '#CCCCCC',
  },
  appWhite: {
    200: 'rgba(255, 255, 255, 0.2)',
    700: '#f9f9f9',
    600: '#FFFFFF',
    800: 'rgba(249, 249, 249, 1)',
    900: 'rgba(249, 249, 249, 0.6)',
  },
  white: {
    50: '#fff',
  },
  blue: {
    300: '#005cff',
    400: '#71B2FF',
    500: '#2396f3',
    600: '#49658c',
    700: '#90B9FE',
    800: '#0d6efd',
  },
  green: {
    500: '#51b05d',
  },
  purple: {
    500: '#A9ACBA',
  },
  yellow: {
    800: '#ffe500',
    900: '#DFB300',
  },
  transparentGray: {
    100: 'rgba(90, 90, 90,0.8)',
  },
  transparentBlack: {
    100: 'rgba(0, 0, 0, 0.6)',
  },
  transparentWhite: {
    100: 'rgba(255, 255, 255, 0.8)',
  },
  transparent: 'rgba(255,255,255,0)',
};

export const fontFamily = {
  black: 'Inter-Black',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  extraLight: 'Inter-ExtraLight',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
};

export const theme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    Inter: {
      100: {
        normal: 'Inter-Regular',
      },
      200: {
        normal: 'Inter-Regular',
      },
      300: {
        normal: 'Inter-Regular',
      },
      400: {
        normal: 'Inter-Regular',
      },
      500: {
        normal: 'Inter-Medium',
      },
      600: {
        normal: 'Inter-Medium',
      },
      700: {
        normal: 'Inter-Bold',
      },
      800: {
        normal: 'Inter-Bold',
      },
      900: {
        normal: 'Inter-Bold',
      },
    },
  },
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: fontFamily.regular,
    body: fontFamily.regular,
    mono: fontFamily.regular,
  },
});

export type AppTheme = typeof theme;

import {extendTheme} from 'native-base'

export const THEME = extendTheme(
{
    colors: {
      green: {
        500: '#3EB489',
      },
      gray: {
        200: '#64748B',
        300: '#828282',
        400: '#3B3B3B',
        500: '#1E293B',
        900: '#000113',
      },
      white: '#FFFFFF',
      red: {
        500: '#F75A68'
      }
    },
    fonts: {
      heading: 'Poppins_700Bold',
      body: 'Poppins_400Regular',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    sizes: {
      14: 56,
      33: 148
    }
  })
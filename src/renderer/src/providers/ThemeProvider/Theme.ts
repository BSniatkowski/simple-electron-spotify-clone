import { createTheme } from '@mui/material'

export const MAIN_COLOR = '#1ed760'
export const TEXT_COLOR = '#ffffff'
export const TEXT_SECONDARY_COLOR = '#b3b3b3'
export const INACTIVE_COLOR = '#a7a7a7'
export const ERROR_COLOR = '#1ed760'
export const BLACK = '#000000'
export const LIGHT_GRAY = '#000000'
export const BACKGROUND_COLOR = '#121212'

export const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_COLOR
    },
    error: {
      main: ERROR_COLOR
    },
    text: {
      primary: TEXT_COLOR,
      secondary: MAIN_COLOR,
      disabled: INACTIVE_COLOR
    },
    background: {
      default: BLACK
    }
  },
  typography: {
    allVariants: {
      lineHeight: '1em'
    }
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'inherit'
      },
      styleOverrides: {
        root: {
          fontSize: 18
        },
        fontSizeInherit: {
          fontSize: 'inherit'
        },
        fontSizeSmall: {
          fontSize: 18
        },
        fontSizeMedium: {
          fontSize: 28
        },
        fontSizeLarge: {
          fontSize: 36
        },
        colorDisabled: {
          color: INACTIVE_COLOR
        }
      }
    }
  }
})

import { createTheme } from '@mui/material'

export const MAIN_COLOR = '#1ed760'
export const TEXT_COLOR = '#ffffff'
export const INACTIVE_COLOR = '#a7a7a7'
export const ERROR_COLOR = '#1ed760'
export const BACKGROUND_COLOR = '#000000'

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
      default: BACKGROUND_COLOR
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
        colorDisabled: {
          color: INACTIVE_COLOR
        }
      }
    }
  }
})

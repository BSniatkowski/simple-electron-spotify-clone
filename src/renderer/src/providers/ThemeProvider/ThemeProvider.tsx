import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './Theme'

const ThemeProvider = ({ children }: { children: JSX.Element }): JSX.Element => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
)

export default ThemeProvider

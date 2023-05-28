import { Button, ButtonProps, styled } from '@mui/material'
import { TEXT_SECONDARY_COLOR } from '@renderer/providers/ThemeProvider/Theme'

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: 'inherit',
  justifyContent: 'flex-start',
  columnGap: theme.spacing(1),
  padding: theme.spacing(1.5),
  textTransform: 'none',
  color: TEXT_SECONDARY_COLOR,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary
  }
}))

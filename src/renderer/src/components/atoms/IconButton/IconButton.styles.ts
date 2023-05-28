import { IconButton, IconButtonProps, styled } from '@mui/material'
import { TEXT_SECONDARY_COLOR } from '@renderer/providers/ThemeProvider/Theme'

export const StyledIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    color: TEXT_SECONDARY_COLOR,
    padding: theme.spacing(1.5),
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary
    }
  })
)

import { Chip, ChipProps, styled } from '@mui/material'
import { TEXT_SECONDARY_COLOR } from '@renderer/providers/ThemeProvider/Theme'

export const StyledChip = styled(Chip)<ChipProps>(({ theme }) => ({
  padding: theme.spacing(0.5),
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.text.primary
  }
}))

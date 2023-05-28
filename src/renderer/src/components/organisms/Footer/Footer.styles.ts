import { styled } from '@mui/material'

export const FooterContainer = styled('footer')(({ theme }) => ({
  gridArea: 'footer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 90,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default
}))

import { styled } from '@mui/material'

export const AsideContainer = styled('aside')(({ theme }) => ({
  gridArea: 'aside',
  display: 'flex',
  backgroundColor: theme.palette.background.default
}))

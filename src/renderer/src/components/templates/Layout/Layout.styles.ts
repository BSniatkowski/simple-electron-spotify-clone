import { styled } from '@mui/material'

export const LayoutContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '300px auto',
  gridTemplateRows: 'auto max-content',
  gridTemplateAreas: `"aside ."
  "footer footer"`,
  gap: theme.spacing(1),
  height: '100vh',
  backgroundColor: theme.palette.background.default
}))

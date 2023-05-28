import { styled } from '@mui/material'

export const LayoutContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '420px auto',
  gridTemplateRows: 'auto max-content',
  gridTemplateAreas: `"aside ."
  "footer footer"`,
  gap: theme.spacing(1),
  height: '100vh',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default
}))

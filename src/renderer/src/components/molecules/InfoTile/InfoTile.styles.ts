import { styled } from '@mui/material'

export const InfoTileContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  columnGap: theme.spacing(2),
  height: '100%',
  width: 240,
  '& > img': {
    cursor: 'pointer',
    height: '100%',
    borderRadius: 4
  }
}))

export const TextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  rowGap: theme.spacing(0.5),
  '& > span': {
    cursor: 'pointer',
    fontSize: 12,
    color: theme.palette.text.disabled,
    '&:first-of-type': {
      fontSize: 14,
      color: theme.palette.text.primary
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

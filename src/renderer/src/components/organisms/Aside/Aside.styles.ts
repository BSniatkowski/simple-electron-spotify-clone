import { styled } from '@mui/material'
import { BACKGROUND_COLOR } from '@renderer/providers/ThemeProvider/Theme'

export const AsideContainer = styled('aside')(({ theme }) => ({
  gridArea: 'aside',
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
  backgroundColor: theme.palette.background.default
}))

const StyledSection = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  backgroundColor: BACKGROUND_COLOR,
  backgroundBlendMode: 'color'
}))

export const MainSection = styled(StyledSection)(() => ({
  height: 'min-content'
}))

export const LibrarySection = styled(StyledSection)(() => ({}))

export const LibraryTitleWithOptions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: theme.spacing(1),
  paddingRight: theme.spacing(1)
}))

export const TitleOptions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const TagsList = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  columnGap: theme.spacing(1)
}))

import Button from '@atoms/Button/Button'
import IconButton from '@atoms/IconButton/IconButton'
import Chip from '@atoms/Chip/Chip'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import {
  AsideContainer,
  LibraryTitleWithOptions,
  LibrarySection,
  MainSection,
  TitleOptions,
  TagsList
} from './Aside.styles'

const tags = [
  { id: '1', text: 'Playlisty' },
  { id: '2', text: 'Wykonawcy' },
  { id: '3', text: 'Albumy' },
  { id: '4', text: 'Podcasty i Programy' }
]

const Aside = (): JSX.Element => (
  <AsideContainer>
    <MainSection>
      <Button
        Icon={HomeIcon}
        text={'Home'}
        iconSize='medium'
        onClick={() => {}}
      />
      <Button
        Icon={SearchIcon}
        text={'Search'}
        iconSize='medium'
        onClick={() => {}}
      />
    </MainSection>
    <LibrarySection>
      <LibraryTitleWithOptions>
        <Button
          Icon={LibraryMusicIcon}
          text={'Your Library'}
          iconSize='medium'
          onClick={() => {}}
        />
        <TitleOptions>
          <IconButton Icon={AddIcon} size='small' onClick={() => {}} />
          <IconButton Icon={ArrowForwardIcon} size='small' onClick={() => {}} />
        </TitleOptions>
      </LibraryTitleWithOptions>
      <TagsList>
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => (
            <Chip key={tag?.id} label={tag?.text} onClick={() => {}} />
          ))}
      </TagsList>
    </LibrarySection>
  </AsideContainer>
)

export default Aside

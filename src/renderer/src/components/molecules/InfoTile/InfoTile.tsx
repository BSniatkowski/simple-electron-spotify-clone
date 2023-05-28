import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { InfoTileContainer, TextWrapper } from './InfoTile.styles'
import { INACTIVE_COLOR } from '@renderer/providers/ThemeProvider/Theme'

const InfoTile = ({
  imgSrc,
  imgType,
  iconType,
  isIconActive,
  onIconClick
}: {
  imgSrc?: string
  imgType?: string
  iconType?: string
  isIconActive?: boolean
  onIconClick?: () => void
}): JSX.Element => (
  <InfoTileContainer>
    <img src={imgSrc} />
    <TextWrapper>
      <span>Main text</span>
      <span>Secondary text</span>
    </TextWrapper>
    {isIconActive ? (
      <FavoriteIcon color='primary' onClick={onIconClick} />
    ) : (
      <FavoriteBorderIcon color='disabled' onClick={onIconClick} />
    )}
  </InfoTileContainer>
)

export default InfoTile

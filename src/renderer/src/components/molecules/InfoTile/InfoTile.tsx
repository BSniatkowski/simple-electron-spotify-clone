import { InfoTileContainer, TextWrapper } from './InfoTile.styles'
import InteractiveIcon from '@atoms/InteractiveIcon/InteractiveIcon'

const InfoTile = ({
  imgSrc,
  imgType,
  iconType,
  isIconActive,
  onIconClick
}: {
  imgSrc?: string
  imgType?: string
  iconType: string
  isIconActive: boolean
  onIconClick: () => void
}): JSX.Element => (
  <InfoTileContainer>
    <img src={imgSrc} />
    <TextWrapper>
      <span>Main text</span>
      <span>Secondary text</span>
    </TextWrapper>
    <InteractiveIcon
      iconType={iconType}
      iconSize='small'
      isIconActive={isIconActive}
      tooltipText={
        isIconActive ? 'Remove from Your Library' : 'Add to Your Library'
      }
      onIconClick={onIconClick}
    />
  </InfoTileContainer>
)

export default InfoTile

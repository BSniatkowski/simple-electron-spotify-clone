import { Tooltip } from '@mui/material'
import { InteractiveIconMap } from './InteractiveIcon.map'
import IconButton from '../IconButton/IconButton'

const InteractiveIcon = ({
  iconType,
  isIconActive,
  iconSize,
  tooltipText,
  onIconClick
}: {
  iconType: string
  isIconActive: boolean
  iconSize?: 'small' | 'medium' | 'large'
  tooltipText: string
  onIconClick: () => void
}): JSX.Element => {
  const { Active, Inactive } = InteractiveIconMap[iconType]

  return (
    <Tooltip title={tooltipText} placement='top' enterDelay={500}>
      <div>
        <IconButton withoutPadding size={iconSize} onClick={onIconClick}>
          {isIconActive ? (
            <Active color='primary' />
          ) : (
            <Inactive color='disabled' />
          )}
        </IconButton>
      </div>
    </Tooltip>
  )
}

export default InteractiveIcon

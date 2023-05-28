import { InteractiveIconMap } from './InteractiveIcon.map'

const InteractiveIcon = ({
  iconType,
  isIconActive,
  onIconClick
}: {
  iconType: string
  isIconActive: boolean
  onIconClick: () => void
}): JSX.Element => {
  const { Active, Inactive } = InteractiveIconMap[iconType]

  return isIconActive ? (
    <Active color='primary' onClick={onIconClick} />
  ) : (
    <Inactive color='disabled' onClick={onIconClick} />
  )
}

export default InteractiveIcon

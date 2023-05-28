import { SvgIconComponent } from '@mui/icons-material'
import { StyledIconButton } from './IconButton.styles'

const IconButton = ({
  Icon,
  size,
  withoutPadding,
  children,
  onClick
}: {
  Icon?: SvgIconComponent
  size?: 'small' | 'medium' | 'large'
  withoutPadding?: boolean
  children?: JSX.Element
  onClick: () => void
}) => (
  <StyledIconButton
    style={withoutPadding ? { padding: 0 } : {}}
    size={size}
    onClick={onClick}
  >
    {Icon && <Icon />}
    {children}
  </StyledIconButton>
)

export default IconButton

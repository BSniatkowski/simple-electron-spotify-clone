import { SvgIconComponent } from '@mui/icons-material'
import { StyledButton } from './Button.styles'

const Button = ({
  variant,
  Icon,
  iconSize,
  text,
  onClick
}: {
  variant?: 'normal' | 'round'
  Icon: SvgIconComponent
  iconSize?: 'small' | 'medium' | 'large' | 'inherit'
  text?: string
  onClick: () => void
}) => (
  <StyledButton onClick={onClick}>
    <Icon fontSize={iconSize} />
    {text && <span>{text}</span>}
  </StyledButton>
)

export default Button

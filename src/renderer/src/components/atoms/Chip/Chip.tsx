import { StyledChip } from './Chip.styles'

const Chip = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <StyledChip label={label} onClick={onClick} />
)

export default Chip

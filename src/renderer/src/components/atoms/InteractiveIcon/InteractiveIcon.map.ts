import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const LIKE_ICON = 'like_icon'

export const InteractiveIconMap = {
  [LIKE_ICON]: {
    Active: FavoriteIcon,
    Inactive: FavoriteBorderIcon
  }
}

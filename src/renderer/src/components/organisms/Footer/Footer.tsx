import InfoTile from '@molecules/InfoTile/InfoTile'
import { FooterContainer } from './Footer.styles'

import placeholderImage50x50 from '@images/50x50.png'
import { useState } from 'react'

const Footer = (): JSX.Element => {
  const [isIconActive, setIsIconActive] = useState(false)

  return (
    <FooterContainer>
      <InfoTile
        imgSrc={placeholderImage50x50}
        isIconActive={isIconActive}
        onIconClick={() => {
          setIsIconActive(!isIconActive)
        }}
      />
      <div>progress</div>
      <div>options</div>
    </FooterContainer>
  )
}

export default Footer

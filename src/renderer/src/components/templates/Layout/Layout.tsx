import { LayoutContainer } from './Layout.styles'

import Aside from '@organisms/Aside/Aside'
import Footer from '@organisms/Footer/Footer'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => (
  <LayoutContainer>
    <Aside />
    {children}
    <Footer />
  </LayoutContainer>
)

export default Layout

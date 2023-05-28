import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import Layout from './components/templates/Layout/Layout'

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Layout>
        <div>Content div</div>
      </Layout>
    </ThemeProvider>
  )
}

export default App

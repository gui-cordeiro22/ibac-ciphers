// Dependencies
import { Fragment } from 'react'

// Styles
import { GlobalStyle } from './styles/global'

// Routes
import { ApplicationRoutes } from './routes'


function App() {

  return (
    <Fragment>
      <GlobalStyle />

      <ApplicationRoutes />
    </Fragment>
  )
}

export default App

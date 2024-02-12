import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CardContext } from './Contexts/contextCard'
import { AddressContext } from './Contexts/contextAddress'
import { PaymentContext } from './Contexts/contextPayment'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CardContext>
          <AddressContext>
            <PaymentContext>
              <Router />
            </PaymentContext>
          </AddressContext>
        </CardContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

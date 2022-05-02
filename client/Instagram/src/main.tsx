import React from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack'
import ApolloConfigHoc from './apollo/configHoc'
import App from './App'

import './index.scss'
import './assets/tailwind.scss'

ReactDOM.render(
    <React.StrictMode>
        <ApolloConfigHoc>
            <SnackbarProvider maxSnack={3}>
                <App />
            </SnackbarProvider>
        </ApolloConfigHoc>
    </React.StrictMode>,
    document.getElementById('root')
)

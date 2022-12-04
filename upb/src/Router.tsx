import Home from './Pages/Home/Home'
import UPBMatch from './Pages/UPBMatch/UPBMatch'
import Contactanos from './Pages/contactanos/Contactanos'
import { createBrowserRouter, Route } from 'react-router-dom'
import App from './App'
import Tienda from './Pages/Tienda/Tienda'
import { store } from './Pages/Tienda/app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/UPBMatch",
                element: <UPBMatch />
            },
            {
                path: "/Contactanos",
                element: <Contactanos />
            },
            {
                path: "/Tienda",
                element: 
                <Provider store={store}>
                    <Tienda />
                </Provider>
            }
        ]
    }    
])

export default router
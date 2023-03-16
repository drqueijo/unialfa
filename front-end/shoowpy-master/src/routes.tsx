import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Produto } from './pages/Produto'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/produto'
                    element={<Produto />}
                />
            </Routes>
        </BrowserRouter>
    )
}

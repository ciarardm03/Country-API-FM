import MainLayout from '@/components/layouts/MainLayout'
import Home from '@/pages/Home'
import {Route, Routes} from 'react-router-dom'
import Country from '@/pages/Country'

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/:country'} element={<Country/>}/>
            </Routes>
        </MainLayout>

    )
}

export default App


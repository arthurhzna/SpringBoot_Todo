import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import HeaderComponent from './HeaderComponent.tsx'
import LoginComponent from './LoginComponent.tsx'

export default function TodoApp() {
    return (
        <div >
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                </Routes>
            </BrowserRouter>
            {/* <h1>Todo App</h1> */}
        </div>
    )
}

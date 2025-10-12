import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import HeaderComponent from './HeaderComponent.tsx'
import LoginComponent from './LoginComponent.tsx'
import ErrorComponent from './ErrorComponent.tsx'

export default function TodoApp() {
    return (
        <div >
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome/:username" element={<WelcomeComponent />} />
                    <Route path="/todos" element={<ListTodosComponent />} />
                    <Route path="/todo/:id" element={<TodoComponent />} />
                    <Route path="/logout" element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent /> } />
                </Routes>
            </BrowserRouter>
            {/* <h1>Todo App</h1> */}
        </div>
    )
}

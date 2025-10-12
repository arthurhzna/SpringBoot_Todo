import {Link} from 'react-router-dom'

function HeaderComponent() {

    // const authContext = useAuth()
    // const isAuthenticated = authContext.isAuthenticated

    return (
        
        <header className="border-b border-gray-200 mb-5 p-2">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <nav className="flex items-center space-x-8 w-full">
                        <a className="text-2xl font-bold text-black ml-2">Todo</a>
                        <div className="flex-grow">
                            <ul className="flex space-x-4">
                                <li>
                                    {true 
                                        && <Link className="text-blue-600 hover:text-blue-800 px-3 py-2" to="/welcome/user">Home</Link>}
                                    
                                </li>
                                <li>
                                    {true 
                                            && <Link className="text-blue-600 hover:text-blue-800 px-3 py-2" to="/todos">Todos</Link>}                                    
                                </li>
                            </ul>
                        </div>
                        <ul className="flex space-x-4">
                            <li>
                                {!true &&
                                    <Link className="text-blue-600 hover:text-blue-800 px-3 py-2" to="/login">Login</Link> }
                            </li>
                            <li>
                                {true &&
                                    <Link className="text-blue-600 hover:text-blue-800 px-3 py-2" to="/logout" >Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent
import React,{useState , useContext, createContext} from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    let start = null
    let temp = localStorage.getItem('user')
    if (temp !== 'null'){start = temp}
    const [user,setUser] = useState(start)

    const login = (user) => {
        setUser(user)
        localStorage.setItem('user',user)
        //console.log('Login shows',localStorage.getItem('user'))
    }
    
    const logout = () => {
        setUser(null)
        localStorage.setItem('user',null)
        //console.log('Logout shows',localStorage.getItem('user'))
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
import React , { useContext , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user , setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

    console.log(token)

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.envVITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if(response.status === 200) {
                setUser(response.data)
                setIsLoading('/login')
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token');
                navigate('/login')
            })

    }, [token])

    return(
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper
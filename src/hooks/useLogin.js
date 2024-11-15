import { useState } from "react"
import { toast } from "react-toastify"
import { useAuthContext } from "../context/authContext"
import { API_ROOT } from "../utils/constants"



export const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()
  const login = async (username, password) => {
    const success = handleInputErrors( username, password )
    if(!success) return
    setLoading(true)
    try {
        const res = await fetch(`${API_ROOT}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Origin': window.location.origin
            },
            body:JSON.stringify({ username, password })
        })
        const data = await res.json()
        if (data.error) {
            throw new Error (data.error)
        }
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)
    } catch (error) {
        toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, login }
}

function handleInputErrors(username, password) {
    if ( !username || !password )
    {
      toast.error('Please fill in all fields')
      return false
    }
    
    return true
}
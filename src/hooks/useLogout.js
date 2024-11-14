import { useState } from "react"
import { useAuthContext } from "../context/authContext"
import { toast } from "react-toastify"
import { API_ROOT } from "../utils/constants"



export const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const logout = async () => {
    setLoading(true)
    try {
         const res = await fetch(`${API_ROOT}/auth/logout`, {
         method: "POST",
         headers: {"Content-Type": "application/json"},
        })
        const data = await res.json()
        if (data.error) {
          throw new Error (data.error)
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, logout }
}

import { BiLogOut } from 'react-icons/bi'
import { useLogout } from '../../hooks/useLogout'

export const LogoutButton = () => {
  const { loading, logout } = useLogout()
  return (
    <div className='mt-auto text-white cursor-pointer'>
      {!loading ? (
        <BiLogOut className='w-6 h-6' onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

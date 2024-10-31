import { FaSearch } from "react-icons/fa"

export const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered w-full h-10" />
      <button type="submit" className="btn btn-circle bg-sky-400 text-white">
      <FaSearch className="w-6 h-6 outline-none"/>

      </button>
    </form>
  )
}

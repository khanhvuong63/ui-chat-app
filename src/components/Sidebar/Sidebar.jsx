import { Converstations } from "./Converstations"
import { LogoutButton } from "./LogoutButton"
import { SearchInput } from "./SearchInput"

export const Sidebar = () => {
  return (
    <div className="border-r border-slate-300 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Converstations />
      <LogoutButton />

    </div>
  )
}

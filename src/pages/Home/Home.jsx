import { MessageContainer } from "../../components/Message/MessageContainer"
import { Sidebar } from "../../components/Sidebar/Sidebar"
export const Home = () => {
  return (
    <div className="flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />  
      <MessageContainer />
    </div>
  )
}

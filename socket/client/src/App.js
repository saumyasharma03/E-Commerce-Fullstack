import "./App.css";
import { SocketProvider } from "./providers/Socket";
import { Route, Routes } from "react-router-dom";
import { PeerProvider } from "./providers/Peer";
import RoomPage from "./pages/Room";
import Homepage from "./pages/home";
function App() {
  return (
    <SocketProvider>
      <PeerProvider>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/room/:roomId" element={<RoomPage/>}/>
      </Routes>
      </PeerProvider>
    </SocketProvider>
  )
}
export default App;
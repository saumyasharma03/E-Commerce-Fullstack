import React, {useState,useEffect, useCallback} from "react";
import { useSocket } from "../providers/Socket";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../providers/Socket";
import { io } from "socket.io-client";
const Homepage = () => {
    const { socket } = useSocket();
    const navigate= useNavigate();
    // console.log("Socket", socket);
    //  socket.emit('join-room', {roomId:'1',emailId:'anything@example.com'});
    const [email, setEmail]=useState();
    const [roomId, setRoomId]=useState();
    const handleJoinRoom = () => {
        socket.emit('join-room', {emailId:email, roomId});
    };

    const handleRoomJoined= useCallback(({roomId})=>{
        navigate(`/room/${roomId}`);
    }, [navigate]);
    useEffect(()=>{
        socket.on('joined-room', handleRoomJoined);
        return()=>{
            socket.off('joined-room', handleRoomJoined);
        }
    }, [handleRoomJoined, socket]);

    return (
        <div className="homepage-container">
            <div className="input-container">
                <input value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder="enter email here" />
                <input value={roomId} onChange={e=> setRoomId(e.target.value)} type="text" placeholder="enter room code" />
                <button onClick={handleJoinRoom}>Enter Room</button>
            </div>
        </div>
    )
}
export default Homepage;
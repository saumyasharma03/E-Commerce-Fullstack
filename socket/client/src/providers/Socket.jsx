import React, { useMemo, createContext, useContext } from 'react';
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

export const useSocket=()=>{
    return useContext(SocketContext);
};

export const SocketProvider = (props) => {
    const socket = useMemo(
        () =>
             io('http://localhost:8001'), 
        []
    );
    return (
        <SocketContext.Provider value={{socket}}>
            {props.children}
        </SocketContext.Provider>
    )
}
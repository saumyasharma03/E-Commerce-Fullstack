import react, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../providers/Socket";
import ReactPlayer from 'react-player';
import { usePeer } from "../providers/Peer";
const RoomPage = () => {
    const { socket } = useSocket();
    const { peer, createOffer, createAnswer,setRemoteAns, sendStream, remoteStream } = usePeer();

    const [myStream, setMyStream] = useState(null);
    const [remoteEmailId, setRemoteEmailId]=useState();
    // const [remoteStream, setRemoteStream]= useState(null);
    const handleNewUserJoined = useCallback(async (data) => {
        const { emailId } = data
        console.log('New user joined room', emailId);
        setRemoteEmailId(emailId);
        console.log(emailId);
        const offer = await createOffer();
        
        socket.emit('call-user', {emailId, offer});
        
    }, [createOffer, socket]);

    const handleIncomingCall = useCallback(async(data) => {
        const {from, offer}=data
        console.log("Incoming call from", from, offer);
        const ans= await createAnswer(offer);
        // console.log(ans);
        socket.emit('call-accepted', {emailId:from, ans});
        setRemoteEmailId(from);
    }, [createAnswer, socket]);

    const handleCallAccepted = useCallback(async(data)=>{
        const {ans}=data;
        console.log("call got accepted", ans);
        await setRemoteAns(ans);
        // sendStream(myStream);
    },[ setRemoteAns]);

    const getUserMediaStream=useCallback(async()=>{
        const stream= await navigator.mediaDevices.getUserMedia({audio:true, video:true});
        setMyStream(stream);
    },[sendStream, setMyStream]);
    const handleNegotitation = useCallback(()=>{
        const localOffer= peer.localDescription;
        socket.emit('call-user',{emailId:remoteEmailId, offer:localOffer});
    },[]);
    useEffect(()=>{
        peer.addEventListener('negotiationneeded', handleNegotitation );
        
        return ()=>{
            peer.removeEventListener('negotiationneeded', handleNegotitation);
        }
        }, [ handleNegotitation, peer]);

    useEffect(() => {
        socket.on('user-joined', handleNewUserJoined);
        socket.on('incoming-call', handleIncomingCall);
        socket.on('call-accepted', handleCallAccepted);

        return () => {
            socket.off('user-joined', handleNewUserJoined);
            socket.off('incoming-call', handleIncomingCall);
            socket.off('call-accepted', handleCallAccepted);
        };
    }, [handleCallAccepted, handleIncomingCall, handleNewUserJoined, socket]);

    useEffect(()=>{
        getUserMediaStream();
    },[]);
    return (
        <div className="room-page-container">
            <h1>Room Page</h1>
            <h4>You are connected to {remoteEmailId || "no one yet"}</h4>
            <button onClick={(e)=>sendStream(myStream)}>
                Send My Video
            </button>
            <ReactPlayer url={myStream} playing muted/>
            <ReactPlayer url={remoteStream} playing />
        </div>
    )
}
export default RoomPage;
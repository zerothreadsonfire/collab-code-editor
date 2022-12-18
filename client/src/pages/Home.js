import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Home() {

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
  }

  const joinRoom = (e) => {
    e.preventDefault();
    if(!roomId || !username) return;

    navigate(`/editor/${roomId}`, {
      state: {
        username 
      }
    });
  }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <h4 className="">Paste Invitation Room ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID " value={roomId} onChange={e => setRoomId(e.target.value)} />
          <input type="text" className="inputBox" placeholder="Username " value={username} onChange={e => setUsername(e.target.value)} />
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn" onClick={createNewRoom}>new room</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built by Satyam</h4>
      </footer>
    </div>
  )
}

export default Home;

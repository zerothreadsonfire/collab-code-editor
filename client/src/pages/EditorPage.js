import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

function EditorPage() {
  const [clients, setClients] = useState([
    {
      socketId: 1,
      username: "Satyam kumar"
    },
    {
      socketId: 2,
      username: "John doe"
    },
    {
      socketId: 2,
      username: "Eric cLapton"
    }
  ])

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo"></div>
          <h3>Connected</h3>
          <div className="clientsList">
            {
              clients.map((client) => <Client key={client.socketId} username={client.username}/>)
            }
          </div>
        </div>
        <button className="btn copyBtn">Copy Room ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>

      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage;

import React, { useContext, useEffect, useState } from "react";
import socket from "api/socket";
import axios from "axios";
import { UserContext } from "contexts/user-context";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import ChatInfo from "components/ChatInfo/ChatInfo";
import MessangeList from "components/MessangeList/MessangeList";
import ChatInput from "components/ChatInput/ChatInput";
import st from "./ChatPage.module.scss";

function ChatPage() {
  const { user: currentUser } = useContext(UserContext);
  const location = useLocation();
  const history = useNavigate();

  const roomId = location.pathname.replace("/room/", "");

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (value) => {
    socket.emit("ROOM:NEW_MESSAGE", {
      text: value,
      userName: currentUser,
      roomId,
    });
    setMessages((prev) => [...prev, { text: value, userName: currentUser }]);
  };

  const loadRoomsInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/rooms/${roomId}`);
      setUsers(response.data.users);
      setMessages(response.data.messages);
    } catch (error) {
      console.log("----------error", error);
    }
  };

  useEffect(() => {
    socket.on("ROOM:SET_USERS", (value) => {
      setUsers(value);
    });
    socket.on("ROOM:NEW_MESSAGE", (value) => {
      setMessages(value);
    });
  });

  useEffect(() => {
    if (!currentUser) {
      history("/");
    }
  }, [currentUser, history]);

  useEffect(() => {
    loadRoomsInfo();
  }, []);

  return (
    <div className={st.container}>
      <div className={st.wrapper}>
        <ChatInfo users={users} roomId={roomId} />

        <div className={st.wrapperChat}>
          <MessangeList messages={messages} />
          <ChatInput handleSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

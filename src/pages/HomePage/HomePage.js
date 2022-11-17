import socket from "api/socket";
import React, { useContext, useState } from "react";
import { FormControl, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/user-context";
import st from "./HomePage.module.scss";
import axios from "axios";

function HomePage() {
  const { handleChangeUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();
  const [data, setData] = useState({
    userName: "",
    roomId: "",
  });

  const handleChange = (key, e) => {
    const { value } = e.target;
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const onLogin = async () => {
    try {
      setIsLoading(true);
      await axios.post(`${process.env.REACT_APP_DOMAIN}/rooms`, data);
      socket.emit("ROOM:JOIN", data);
      handleChangeUser(data.userName);
      setIsLoading(false);
      history(`/room/${data.roomId}`);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <div className={st.container}>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className={st.container}>
      <div className={st.wrapperForm}>
        <FormControl
          value={data.userName}
          onChange={(e) => handleChange("userName", e)}
          placeholder="User"
        />
        <FormControl
          value={data.roomId}
          onChange={(e) => handleChange("roomId", e)}
          placeholder="Room"
        />
        <Button onClick={onLogin} disabled={!data.userName || !data.roomId}>
          Enter
        </Button>
      </div>
    </div>
  );
}

export default HomePage;

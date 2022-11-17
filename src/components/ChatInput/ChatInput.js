import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import st from "./ChatInput.module.scss";

function ChatInput({ handleSendMessage = () => {} }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value: currentValue } = e.target;
    setValue(currentValue);
  };

  const handleSend = () => {
    handleSendMessage(value);
    setValue("");
  };

  return (
    <div className={st.container}>
      <div className={st.holderInput}>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className={st.buttonGroup}>
        <Button onClick={() => setValue("")} variant="secondary">
          Clear
        </Button>

        <Button onClick={handleSend} disabled={!value}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default ChatInput;

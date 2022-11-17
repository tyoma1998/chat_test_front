import React, { useContext } from "react";
import { UserContext } from "contexts/user-context";
import Text from "components/Text/Text";
import cn from "classnames";
import st from "./MessangeList.module.scss";

function MessangeList({ messages = [] }) {
  const { user: currentUser } = useContext(UserContext);

  const renderMessageList = () => {
    return messages.map(({ text, userName }) => {
      return (
        <div
          key={`${text}-${userName}`}
          className={cn(st.holderMessange, {
            [st.currentUser]: userName === currentUser,
          })}
        >
          <div>
            <Text variant="normal" bold>
              User: {userName}
            </Text>
          </div>
          <div>
            <Text variant="normal">{text}</Text>
          </div>
        </div>
      );
    });
  };

  return <div className={st.holderListMessange}>{renderMessageList()}</div>;
}

export default MessangeList;

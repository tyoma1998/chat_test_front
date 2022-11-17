import React, { useContext, useMemo } from "react";
import { UserContext } from "contexts/user-context";
import Text from "components/Text/Text";
import st from "./ChatInfo.module.scss";

function ChatInfo({ users = [], roomId }) {
  const { user: currentUser } = useContext(UserContext);

  const additionalUsers = useMemo(() => {
    return users.filter((item) => item !== currentUser);
  }, [currentUser, users]);

  const renderAdditionalUsers = () => {
    return (
      <div className={st.listMessage}>
        {additionalUsers.map((item) => (
          <Text variant="normal" bold key={item}>
            - {item}
          </Text>
        ))}
      </div>
    );
  };

  return (
    <div className={st.wrapperUsers}>
      <div className={st.wrapperRoom}>
        <Text variant="normal" bold>
          Room: {roomId}
        </Text>

        <Text variant="normal" bold>
          My name: {currentUser}
        </Text>

        {additionalUsers.length > 0 && (
          <div className={st.holderAdditionalUsers}>
            <Text variant="normal" bold>
              Additional users:
            </Text>
            {renderAdditionalUsers()}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatInfo;

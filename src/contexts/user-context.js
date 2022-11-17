import { createContext, useState } from "react";

export const UserContext = createContext({
  user: "",
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleChangeUser = (user) => {
    setUser(user);
  };

  const contextValue = {
    user,
    handleChangeUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

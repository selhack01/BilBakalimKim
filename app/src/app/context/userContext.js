import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    id: "1",
    username: "mehmet ali",
    password: "selek123",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;

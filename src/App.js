import { UserProvider } from "contexts/user-context";
import Router from "router/Router";
import "./App.scss";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;

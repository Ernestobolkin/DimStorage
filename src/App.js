import { Login } from "./components/login/login";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact>
          <Login />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

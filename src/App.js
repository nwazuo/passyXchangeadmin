import logo from "./logo.svg";
import "./App.css";
import ResponsiveDrawer from "./components/dashboardTemplate";
import Cards from "./components/cards";
import KingsCardMain from "./components/kingsCardMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ResponsiveDrawer>
                <KingsCardMain />
                <Cards />
              </ResponsiveDrawer>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Toast from "./components/Toasts";
import ShowTime from "./pages/ShowTime";
import RouteComponent from "./Route";

function App() {
  return (
    <>
      <Toast />
      <RouteComponent />
    </>
  );
}

export default App;

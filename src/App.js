import { Route, Routes } from "react-router-dom";
import Landing from "./Page/Landing";
import LogIn from "./Component/Auth/Log/LogIn";
import Register from "./Component/Auth/Register/Register";
import NotFound from "./Page/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

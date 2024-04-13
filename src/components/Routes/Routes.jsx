import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

const AppRoutes = () => (
  <>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </>
);

export default AppRoutes;

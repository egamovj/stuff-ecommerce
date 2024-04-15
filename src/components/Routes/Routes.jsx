import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => (
  <>
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  </>
);

export default AppRoutes;

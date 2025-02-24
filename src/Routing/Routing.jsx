import { BrowserRouter, Routes, Route } from "react-router";
import { RootLayout } from "../Layout/RootLayout";
import { Home } from "../Pages/Home/Home";
export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

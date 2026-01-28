import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:key" element={<RedirectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

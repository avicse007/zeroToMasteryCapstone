// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navbar from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";

const Shop = () => <div>Shop</div>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

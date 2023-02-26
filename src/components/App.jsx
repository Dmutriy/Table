import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import { SharedLayout } from "./SharedLayout";

const data = [
  ["John", "Doe", 30, "johndoe@example.com"],
  ["Jane", "Doe", 25, "janedoe@example.com"],
  ["Bob", "Smith", 45, "bobsmith@example.com"],
  ["Alice", "Johnson", 27, "alicejohnson@example.com"],
];

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route
          path="products/:id"
          element={<ProductDetails data={data} />}
        />
      </Route>
    </Routes>
  );
};

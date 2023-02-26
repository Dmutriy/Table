import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import { SharedLayout } from "./SharedLayout";

// const data = [
//   {
//     name: "Марія",
//     firstname: "Іванова",
//     age: 25,
//     email: "maria.ivanova@example.com",
//   },
//   {
//     name: "Іван",
//     firstname: "Петров",
//     age: 33,
//     email: "ivan.petrov@example.com",
//   },
//   {
//     name: "Катерина",
//     firstname: "Сидоренко",
//     age: 45,
//     email: "katerina.sydorenko@example.com",
//   },
//   {
//     name: "Павло",
//     firstname: "Кузьменко",
//     age: 28,
//     email: "pavlo.kuzmenko@example.com",
//   },
//   {
//     name: "Анна",
//     firstname: "Мартиненко",
//     age: 32,
//     email: "anna.martynenko@example.com",
//   },
//   {
//     name: "Євген",
//     firstname: "Тарасов",
//     age: 36,
//     email: "yevhen.tarasov@example.com",
//   },
//   {
//     name: "Нікіта",
//     firstname: "Кравець",
//     age: 27,
//     email: "nikita.kravets@example.com",
//   },
//   {
//     name: "Ольга",
//     firstname: "Ільїна",
//     age: 39,
//     email: "olga.ilina@example.com",
//   },
//   {
//     name: "Артем",
//     firstname: "Даниленко",
//     age: 44,
//     email: "artem.danilenko@example.com",
//   },
//   {
//     name: "Марина",
//     firstname: "Ковальова",
//     age: 31,
//     email: "marina.kovalova@example.com",
//   },
//   {
//     name: "Ірина",
//     firstname: "Савченко",
//     age: 42,
//     email: "iryna.savchenko@example.com",
//   },
//   {
//     name: "Денис",
//     firstname: "Федоренко",
//     age: 30,
//     email: "denys.fedorenko@example.com",
//   },
//   {
//     name: "Олександр",
//     firstname: "Марченко",
//     age: 46,
//     email: "oleksandr.marchenko@example.com",
//   },
//   {
//     name: "Валерія",
//     firstname: "Кравчук",
//     age: 28,
//     email: "valeriya.kravchuk@example.com",
//   },
//   {
//     name: "Дмитро",
//     firstname: "Ковальчук",
//     age: 22,
//     email: "dmitro.kovalchuk@example.com",
//   },
//   {
//     name: "Олексій",
//     firstname: "Зайцев",
//     age: 58,
//     email: "oleksiy.zaytsev@example.com",
//   },
//   {
//     name: "Софія",
//     firstname: "Шевченко",
//     age: 29,
//     email: "sofiya.shevchenko@example.com",
//   },
//   {
//     name: "Андрій",
//     firstname: "Кравченко",
//     age: 41,
//     email: "andriy.kravchenko@example.com",
//   },
//   {
//     name: "Тетяна",
//     firstname: "Мельник",
//     age: 64,
//     email: "tetiana.melnyk@example.com",
//   },
//   {
//     name: "Олена",
//     firstname: "Шевчук",
//     age: 34,
//     email: "olena.shevchuk@example.com",
//   },
//   {
//     name: "Юрій",
//     firstname: "Коваленко",
//     age: 55,
//     email: "yuriy.kovalenko@example.com",
//   },
//   {
//     name: "Надія",
//     firstname: "Бойко",
//     age: 49,
//     email: "nadiya.boyko@example.com",
//   },
// ];

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

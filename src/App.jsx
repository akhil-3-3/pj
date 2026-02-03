// import { Routes, Route } from "react-router-dom";
// import Category from "./components/Category";
// import { CategoryProvider } from "./components/CategoryContext";
// import Sidebar from "./components/SideBar";
// import Top from "./components/Admin";

// function App() {
//   return (
//     <CategoryProvider>
// <div className="flex">
//   <Sidebar />

//   <div className="flex-1">
//     <Top />
//     <div className="p-5">
//       <Routes>
//         <Route path="/categories" element={<Category />} />
//       </Routes>
//     </div>
//   </div>
// </div>
//     </CategoryProvider>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout1 from "./components/Admin/Layout1";
import Product1 from "./components/Admin/Product1";
import Category1 from "./components/Admin/Category1";
import Home from "./components/Admin/Home";
import Order from "./components/Admin/Order";
import Login from "./components/Admin/Login";

import { Categoryprovider1 } from "./components/Admin/CategoryContext1";
import { ProductProvider1 } from "./components/Admin/ProductContext1";
import { CartProvider } from "./components/Admin/CartContext";

const App = () => {
  return (
    <Categoryprovider1>
      <ProductProvider1>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<Home />} />
            <Route path="/admin" element={<Layout1 />}>
              <Route path="products" element={<Product1 />} />
              <Route path="orders" element={<Order />} />
              <Route path="category" element={<Category1 />} />
            </Route>
          </Routes>
        </CartProvider>
      </ProductProvider1>
    </Categoryprovider1>
  );
};

export default App;

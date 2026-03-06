// // import { Routes, Route } from "react-router-dom";
// // import Category from "./components/Category";
// // import { CategoryProvider } from "./components/CategoryContext";
// // import Sidebar from "./components/SideBar";
// // import Top from "./components/Admin";

// // function App() {
// //   return (
// //     <CategoryProvider>
// // <div className="flex">
// //   <Sidebar />

// //   <div className="flex-1">
// //     <Top />
// //     <div className="p-5">
// //       <Routes>
// //         <Route path="/categories" element={<Category />} />
// //       </Routes>
// //     </div>
// //   </div>
// // </div>
// //     </CategoryProvider>
// //   );
// // }

// // export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Layout1 from "./components/Admin/Layout1";
// import Product1 from "./components/Admin/Product1";
// import Category1 from "./components/Admin/Category1";
// import Home from "./components/Admin/Home";
// import Order from "./components/Admin/Order";
// import Login from "./components/Admin/Login";

// import { Categoryprovider1 } from "./components/Admin/CategoryContext1";
// import { ProductProvider1 } from "./components/Admin/ProductContext1";
// import { CartProvider } from "./components/Admin/CartContext";

// const App = () => {
//   return (
//     <Categoryprovider1>
//       <ProductProvider1>
//         <CartProvider>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/user" element={<Home />} />
//             <Route path="/admin" element={<Layout1 />}>
//               <Route path="products" element={<Product1 />} />
//               <Route path="orders" element={<Order />} />
//               <Route path="category" element={<Category1 />} />
//             </Route>
//           </Routes>
//         </CartProvider>
//       </ProductProvider1>
//     </Categoryprovider1>
//   );
// };

// export default App;
import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import ToDo from "./components/ToDO/ToDo";

import Grade from "./components/Grade/Grade";
import Products from "./components/Dashboard/Products";
import { ProductProvider } from "./components/Dashboard/ProductContext";
import TaskManager from "./components/Taskmanager/TaskManager";
import Login1 from "./components/Login1";
import Dashboard1 from "./components/Dashboard1";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Notes from "./components/Notes/Notes";
import UserList from "./components/Pages/UserList";
import UserDetails from "./components/Pages/UserDetails";
import StudentCrud from "./components/StudentCrud";
import Students from "./components/Students/Students";
import Navbar from "./components/ECommerce/Navbar";
import Hero from "./components/ECommerce/Hero";
import Collections from "./components/ECommerce/Collections";
import BestSeller from "./components/ECommerce/BestSeller";
import { Features } from "tailwindcss";
import Feature from "./components/ECommerce/Feature";
import Footer from "./components/ECommerce/Footer";
import ProductDetails from "./components/ECommerce/ProductDetails";

const App = () => {
  // const [uname, setUname] = useState("");

  return (
    // <ProductProvider>
    //   {/* <UsersList /> */}
    //   {/* <ToDo /> */}
    //   {/* <Counter /> */}
    //   {/* <Grade /> */}
    //   <TaskManager />
    // </ProductProvider>

    // <Routes>
    //   <Route path="/" element={<Navigate to="/login1" />} />
    //   <Route path="/login1" element={<Login1 setUname={setUname} />} />
    //   <Route
    //     path="/dashboard1"
    //     element={<Dashboard1 uname={uname} setUname={setUname} />}
    //   />
    // </Routes>
    // <Notes />
    // <Routes>
    //   <Route path="/" element={<UserList/>}/>
    //   <Route path="/user/:id" element={<UserDetails/>}/>
    // </Routes>
    // <StudentCrud />
    // <Students />
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Collections />
              <BestSeller />
              <Feature />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

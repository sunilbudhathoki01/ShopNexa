import React from "react";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element:(<Home></Home> ),
  },
  {
    path:"login",
    element:(<LoginPage></LoginPage>)
  },
  {
    path:"signup",
    element:(<SignupPage/>)
  },
  {
    
  }
])
const App = () => {
  return (
    <div className="Home">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

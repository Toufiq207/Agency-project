import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootpage from './layout/Rootpage';
import Homepage from './page/Homepage';

import Blogs from './page/Blogs';
import Error from './page/Error';
import Pricing from './layout/Pricing';
import Services from './layout/Service'
import Login from './page/Login';
import Signup from './page/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootpage/>}
    
    >
       <Route
      path="/"
      element={<Homepage/>}
    
    >
     
    </Route>
      
       <Route
      path="blogs"
      element={<Blogs/>}
    
    >
     
    </Route>
     <Route
      path="/*"
      element={<Error/>}
     
    ></Route>
     <Route
      path="/pricing"
      element={<Pricing/>}
     
    ></Route>
     <Route
      path="/services"
      element={<Services
      
      
  />}
     
    ></Route>
     <Route
      path="/login"
      element={<Login
      
      
  />}
     
    ></Route>
     <Route
      path="/signup"
      element={<Signup
      
      
  />}
     
    ></Route>
    </Route>
  )
);

const App = () => {
  return (
 <RouterProvider router={router} />
  )
}

export default App

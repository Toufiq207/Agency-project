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
    </Route>
  )
);

const App = () => {
  return (
 <RouterProvider router={router} />
  )
}

export default App

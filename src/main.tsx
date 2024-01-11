import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import SkeletonPage from './components/SkeletonPage.tsx'
import Login from './components/Login.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/home/Profile.tsx'
import Assets from './components/home/Assets.tsx'
import Goal from     './components/home/Goal.tsx'
// import Root from './routes/root';
// import { Skeleton } from '@radix-ui/themes'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"main",
    element:<SkeletonPage/>,
    children:[{path:"profile",element:<Profile/>},{path:"assets",element:<Assets/>},{path:"goal",element:<Goal/>}]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)

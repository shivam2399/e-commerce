import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Store from './Components/Store';
import ProductDetail from './Components/ProductDetail';

const productsArr = [
  {
    id:'1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id:'2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:'3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:'4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


const router = createBrowserRouter([
  {path: '/', element: <Store />},
  {path: '/about', element: <About />},
  {path: '/home', element: <Home />},
  {path: '/contactUs', element: <ContactUs />},
  {path: '/product/:id', element: <ProductDetail productsArr={productsArr} />}
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
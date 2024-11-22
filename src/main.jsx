import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes/index";
import CartProvider from './contexts/CartContext';


const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)

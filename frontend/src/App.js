import logo from "./logo.svg";
import "./App.css";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Pricing from "./pages/Pricing";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { userExists } from "./redux/reducer/auth";
import { useEffect } from "react";
import Checkout from "./pages/Checkout";
import PaymentFailed from "./pages/PaymentFailed";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  const [cookies] = useCookies();
  const dispatch = useDispatch();

  const loginWithToken = async ()=>{
    try{
      const url = process.env.REACT_APP_BACKEND_URL+'organization/login-with-token';
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${cookies.access_token}`
        }
      });
      const data = await response.json();
      if(!data.success){
        throw new Error(data.message);
      }
      console.log(data)
      dispatch(userExists(data.organization));
    }
    catch(err){
      // toast.error(err.message);
    }
  }

  useEffect(()=>{
    if(cookies?.access_token){
      loginWithToken();
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-[100vh] justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

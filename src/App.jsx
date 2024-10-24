import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
// import "./App.css";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-[#121212]">
      <div className="w-full block text-white">
        <Header />
        <main className="flex items-center justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    // <div className="min-h-screen  bg-[#121212] text-white">
    //   <Header />
    //   <main className="flex items-center justify-center">
    //     <Outlet />
    //   </main>
    //   <Footer />
    // </div>
  ) : null;
}

export default App;




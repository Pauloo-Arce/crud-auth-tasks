import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { supabase } from "./supabase/client";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        !session ? navigate("/login") : navigate("/");
      }
    );

    return () => {
      listener.subscription();
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

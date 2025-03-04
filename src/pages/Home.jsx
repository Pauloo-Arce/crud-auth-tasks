import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router";
import TaskForm from "../components/TaskForm";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: user } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Logout
      </button>
      <TaskForm />
    </>
  );
}

export default Home;

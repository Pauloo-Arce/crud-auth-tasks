import { useState } from "react";
import { supabase } from "../supabase/client";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await supabase.from("tasks").insert({
        name: taskName,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="write a task name"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Add task</button>
      </form>
    </>
  );
}

export default TaskForm;

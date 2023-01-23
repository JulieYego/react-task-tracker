import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "May 5th at 2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "May 6th at 1:30 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "May 7th at 12:30 pm",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header title = 'Task Tracker' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

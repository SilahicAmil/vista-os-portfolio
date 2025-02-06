import "./App.css";

import { TaskBar } from "../components/TaskBar/TaskBar";

export default function App() {
  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/windows-vista.jpg')" }}
      >
        <TaskBar />
      </div>
    </>
  );
}

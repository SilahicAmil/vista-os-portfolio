import "./App.css";

import { TaskBar } from "../components/TaskBar/TaskBar";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-red-500 to-cyan-500 relative">
        <TaskBar />
      </div>
    </>
  );
}

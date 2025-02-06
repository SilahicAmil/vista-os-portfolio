import { useState } from "react";

export function TaskBar() {
  const [toggleStartMenu, setToggleStartMenu] = useState(false);

  function toggleMenu() {
    setToggleStartMenu((prevState) => !prevState);
  }
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="fixed bottom-0 left-0 w-screen">
      {toggleStartMenu && (
        <div className="absolute bottom-16 left-2 bg-white p-4 shadow-lg rounded-md">
          <h1>Start Menu Items</h1>
          <h1>Start Menu Items</h1>
          <h1>Start Menu Items</h1>
          <h1>Start Menu Items</h1>
          <h1>Start Menu Items</h1>
        </div>
      )}
      <div className="flex items-center bg-blue-500 p-2">
        <div>
          <button
            className="bg-red-500 ml-2 p-4 rounded-full w-16 h-16 flex items-center justify-center"
            onClick={toggleMenu}
          >
            Start Menu
          </button>
        </div>
        <div className="h-full flex items-center">
          <ul className="flex gap-8 ml-8">
            <li className="bg-gray-500 p-4 rounded-t-md w-24 ">1</li>
            <li className="bg-gray-500 p-4 rounded-t-md w-24">1</li>
            <li className="bg-gray-500 p-4 rounded-t-md w-24">1</li>
          </ul>
        </div>
        <div className="flex ml-auto mr-12 justify-center items-center">
          {/* TODO figure out how to get this to be realistic and update 
                I Guess just a useEffect the runs every second?*/}
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

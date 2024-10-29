import React from "react";

function App() {
  return (
    <div>
      <nav className="px-32 flex justify-between items-center h-24 shadow-lg">
        <div className="text-3xl">TixIT</div>
        <ul>
          <li className="flex gap-14 text-sm">
            <a href="#">Home</a>
            <a href="#">Movie</a>
            <a href="#">Buy Ticket</a>
          </li>
        </ul>
        <div className="flex gap-3 text-sm">
          <a
            href="#"
            className="px-4 py-3 bg-white rounded-lg text-black border border-gray"
          >
            SignIn
          </a>
          <a
            href="#"
            className="px-4 py-3 bg-gray rounded-lg text-white border border-gray"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;

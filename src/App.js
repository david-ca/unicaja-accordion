import React, { useState } from "react";

import Accordion from "./components/Accordion.js";
import "./App.css";

function App() {
  const mockData = [
    {
      title: "Lorem ipsum dolor sit amet?",
      body: "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
      id: 0,
    },
    {
      title: "Dignissimos sequi architecto?",
      body: "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
      id: 1,
    },
    {
      title: "Voluptas praesentium facere?",
      body: "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
      id: 2,
    },
  ];

  return (
    <div className="App">
      <h1 className="app-header">FAQ HELP SECTION</h1>
      <Accordion data={mockData}></Accordion>
    </div>
  );
}

export default App;

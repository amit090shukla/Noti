import React, { useState } from "react";
import "./style.css";

const App: React.FC = () => {
  const [pos, setPos] = useState<Array<{ x: number; y: number }>>([]);
  const handleSheetClick = (e: any) => {
    e.persist();
    setPos(prev => [...prev, { x: e.clientX, y: e.clientY }]);
  };
  return (
    <div className="container" onClick={handleSheetClick}>
      {pos.map((pos, id) => (
        <input
          key={id}
          autoFocus
          placeholder="Why are you gay"
          style={{ position: "absolute", left: pos.x, top: pos.y }}
          onClick={e => e.stopPropagation()}
        />
      ))}
    </div>
  );
};

export default App;

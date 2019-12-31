import React, { useState } from "react";
import "./style.css";

const App: React.FC = () => {
  const [pos, setPos] = useState<Array<{ x: number; y: number; id: number }>>(
    []
  );
  const [currentlyDragging, setCurrentlyDragging] = useState<number | null>(
    null
  );
  const handleSheetClick = (e: any) => {
    e.persist();
    setPos(prev => [
      ...prev,
      { x: e.clientX, y: e.clientY, id: e.clientY + e.clientX }
    ]);
  };
  const handleDragEnd = (e: any) => {
    const us = pos.map(pos => {
      if (pos.id === currentlyDragging) {
        return { x: e.clientX, y: e.clientY, id: currentlyDragging };
      }
      return pos;
    });
    setPos(us);
    console.log(e);
  };
  return (
    <div className="container" onClick={handleSheetClick}>
      {pos.map((pos, id) => (
        <input
          key={id}
          autoFocus
          style={{ position: "absolute", left: pos.x, top: pos.y }}
          onClick={e => e.stopPropagation()}
          className="input_styles"
          draggable={true}
          onDragStart={() => setCurrentlyDragging(pos.id)}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};

export default App;

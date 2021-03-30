import React from 'react';
// Padre
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const App = () => {
  return (
    <DragDropContext
      onDragStart={() => console.log('start')}
      onDragUpdate={() => console.log('update')}
      onDragEnd={() => console.log('end')}
    >
      <Droppable droppableId="12da">{() => <ul>asda</ul>}</Droppable>
    </DragDropContext>
  );
};

export default App;

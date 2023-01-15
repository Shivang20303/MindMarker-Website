import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const [newnote, addnewnote] = useState([]);

  function addnote(newnote) {
    addnewnote((prev) => {
      return [...prev, newnote];
    });
  }

  function deletenote(id){
    addnewnote((prev) => {
      return prev.filter((noteobj,index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={addnote} />
      {newnote.map((noteobj , index) => {
        return <Note 
          key={index} 
          id={index}
          title={noteobj.title} 
          content={noteobj.content}
          onDelete={deletenote} 
        />
    })}
      <Footer />
    </div>
  );
}

export default App;

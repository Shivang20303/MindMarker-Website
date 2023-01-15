import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
//Fab is used to make the Add button get highlighted when the mouse hovers overit
import Fab from "@mui/material/Fab";    
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
    const [notedetails, addnewdetails] = useState({
        title: "",
        content: "",
    })
    const [zoomstate,setzoomstate] = useState(false);

    function handleChange(event){
        const {name,value} = event.target;

        addnewdetails((prev) => {
            return {
                ...prev,
                [name]: value
            };
        })
    }

    function UpdateNote(event){
        props.onAdd(notedetails);
        addnewdetails({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick(){
        setzoomstate(true);
    }

    return (
        <div>
            <form className="create-note">
                {zoomstate && <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={notedetails.title} 
                />}
            {/* 
                OR
                {zoomstate ? <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={notedetails.title} 
                />                      
                : null
            } */}
                <textarea
                    onClick={handleClick}
                    name="content"
                    placeholder="Take a note ...."
                    rows={zoomstate?"3":"1"}
                    onChange={handleChange}
                    value={notedetails.content}
                />
                <Zoom in={zoomstate}>
                <Fab onClick={UpdateNote}>
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateNote;

import React from 'react';
import './noteCard.css'

const NoteCard = (props)=>{
    return(
        <div className='noteCardContainer'>
            <p className='notePara'>{props.noteText}</p>
        </div>
    );
}


export default NoteCard;
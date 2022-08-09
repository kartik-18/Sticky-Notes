import React from 'react'
import Notes from '../Notes/Notes'

import './NoteContainer.css'

import plusIcon from '../../imgs/add-create-new-plus-icon-20.png'

function NoteContainer(props) {

    const revArr = (arr) => {
        const array = []
        for (let i = arr.length - 1; i >= 0; --i) {
            array.push(arr[i]);
        }
        return array;
    }

    const note = revArr(props.note1);


    return (
        <div className='note-container' >
            <h2>Notes</h2>
            <div className='note-container_notes  custom-scroll'>
                {
                    note.length > 0 ?
                        note.map((_note, index) => { return (<Notes note={_note} key={_note.id} deleteNote={props.deleteNote} updateText={props.updateText}></Notes>) })
                        : <h3>No Notes Present.</h3>
                }
            </div>
        </div>
    )
}

export default NoteContainer

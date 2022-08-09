import React from 'react'

import './Notes.css'

import deleteIcon from '../../imgs/delete.png'


let timer = 400, timeout
function Notes(props) {

  const formatDate = (value) => {
    const date = new Date(value);
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']

    if (!value) { return '' };
    let hrs = date.getHours()
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    let month = months[date.getMonth()];

    return `${hrs}:${min} ${ampm} ${day} ${month}`

  }

  const debounce = (func) => {
    clearTimeout(timeout)
    timeout = setTimeout(func, timer)
  }

  const updateText = (text,id) => { debounce(() => { props.updateText(text,id) }) }

  return (
    <div className='note ' style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text custom-scroll-note' defaultValue={props.note.text} onChange={(event) => {updateText(event.target.value,props.note.id) }}></textarea>

      <div className='note_footer'>

        <p>{formatDate(props.note.time)}</p>
        <img src={deleteIcon} className='note_del_img' alt='DELETE' onClick={() => { props.deleteNote(props.note.id) }}></img>
      </div>

    </div>
  )
}

export default Notes

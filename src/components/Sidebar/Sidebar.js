import React, { useState } from 'react'

import plusIcon from '../../imgs/add-create-new-plus-icon-20.png'

import './Sidebar.css'

function Sidebar(props) {

  const colors = ['#fe9b72', '#c04cee', '#00d4fe', 'yellow', ' #a4ff2a']

  const [listOpen, setListOpen] = useState(false);

  function change() {
    setListOpen(!listOpen);
  }

  return (
    <div className='sidebar'>
      <img src={plusIcon} width={60} alt='Add' onClick={() => change()}></img>
      

      <ul className={`sidebar_ul ${listOpen ? 'sidebar_ul_active' : ""}`}>
        {
          colors.map((color, index) => {
            return (
              <li
                className='sidebar_ul_li'
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => {props.addNote(color)}}
              >
              </li>
            )
          }
          )
        }

      </ul>
    </div>
  )
}

export default Sidebar

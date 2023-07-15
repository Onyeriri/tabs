import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const Duties = ({ duty }) => {
  return (
          <div className='job-desc'>
              <MdOutlineKeyboardDoubleArrowRight className='job-icon' /> <p>{duty}</p>
           </div>
  )
}

export default Duties
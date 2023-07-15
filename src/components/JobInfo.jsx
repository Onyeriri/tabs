import React from 'react'
import Duties from './Duties';
import { v4 as uuidv4 } from 'uuid';

const JobInfo = ({ currentItem, info }) => {
    let {duties, title, company, dates} = info[currentItem];
    
    const displayDuties = duties.map((duty) => {
        return <Duties key={uuidv4()} duty={duty} />
    })

  return (
      <article className='job-info'>
          <h4>{title }</h4>
          <span className='job-company'>{company}</span>
          <p className='job-date'>{dates}</p>
          {displayDuties}
    </article>
  )
}

export default JobInfo
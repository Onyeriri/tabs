import React from 'react'

const BtnContainer = ({currentItem, JobDetails, setCurrentItem, index }) => {
    const { company, order } = JobDetails;
  return (
      <div className='btn-container'>
          <button className={index === currentItem ? 'job-btn active-btn' : 'job-btn'} onClick={() => setCurrentItem(index)} type="button" >
          {company}
          </button>
      </div>
  )
}

export default BtnContainer
import { useState } from 'react';
import useFetch from './Hooks/useFetch';
import BtnContainer from './components/BtnContainer';
import JobInfo from './components/JobInfo';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const {info, isLoading, error} = useFetch(url);
  const [currentItem, setCurrentItem] = useState(0);

  const displayJobs = info?.map((jobInfo, index) => {
    return <BtnContainer key={uuidv4()} setCurrentItem={setCurrentItem} currentItem={currentItem} index={index} JobDetails={jobInfo} />;
  });

  if (isLoading) {
    return (
      <section className='center'>
        <div className='loading'></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className='center'>
        <div>An error has occurred</div>
      </section>
    );
  }
  
  return <section className='jobs-center'>
    <div className='btn-container'>{displayJobs}</div>
    <JobInfo currentItem={currentItem} info={info}/>
  </section>;
};
export default App;

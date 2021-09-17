import React from 'react';
import Fade from 'react-reveal/Fade';

import useDataFromEventsAPI from '../hooks/useDataFromEventsAPI';
import EventCell from './EventCell';


const EventTable = (props) => {
  const [fetchData, loading, data] = useDataFromEventsAPI();

  return (
    <>
    {loading ?
    (
        <div className="loaderWrap">
          <div className="loader">Loading...</div>
        </div>
      )
      :
      (<div className="eventsList">
      {props.children}
      {data && data.map(event => <Fade key={event.id} bottom><span role='list'><EventCell key={event.id} {...event}/></span></Fade>)}

    </div> )
    }
      </>
  )
}
export default EventTable;
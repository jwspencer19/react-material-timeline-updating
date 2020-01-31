import React from 'react'
import TimelineItem from './TimelineItem'
import './Timeline.css'

const Timeline = ({ outcomes }) => outcomes.length > 0 && (
  <div className='timeline-container'>
    {outcomes.map((outcome, idx) => (
      <TimelineItem outcome={outcome} key={idx} />
    ))}
  </div>
)

export default Timeline
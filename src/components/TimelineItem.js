import React from 'react'
import './Timeline.css'

const TimelineItem = ({ outcome }) => (
  <div className='timeline-item'>
    <div className='timeline-item-content'>
      <span className='tag' style={{ background: outcome.category.color }}>
        {outcome.category.tag}
      </span>
      <time>{outcome.date}</time>
      <p>{outcome.text}</p>
      {outcome.link && (
        <a
          href={outcome.link.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {outcome.link.text}
        </a>
      )}
      <span className='circle' />
    </div>
  </div>
)

export default TimelineItem
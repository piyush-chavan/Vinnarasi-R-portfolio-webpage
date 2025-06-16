import React from 'react'
import ResearchProjects from './ResearchProjects'
import ResearchInterests from './ResearchInterests'
import Achievements from './Achievements'

export default function Research() {
  return (
    <div style={{padding:'20px 10%'}}>
      <p className="section-title">Research</p>
      <ResearchProjects/>
      <ResearchInterests/>
      <Achievements/>

    </div>
  )
}

import React from 'react'


const Agent = () => {
  const isSpeaking = true;

  return (
    <div className="call-view">
        <div className="card-interviewer">
            <div className="avatar">
               <img src="/ai-avatar.png" alt="vapi" width={65}
               height={54} className="object-cover"/>
               {isSpeaking && <span className="animate-speak"/>}
            </div>
            <h3>AI Interviewer</h3>
        </div>
      <div className="card-border">
        <div className="card-content">
          <img src="/user-avatar.png" alt="user avatar" width={540} height={540} className="rounded-full object-cover size-[120px]"/>
          <h3>{userName}</h3>
        </div>
      </div>
    </div>
  )
}

export default Agent

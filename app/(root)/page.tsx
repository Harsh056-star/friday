import InterviewCard from '@/components/InterviewCard'
import { dummyInterviews } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>
       
        <p className="text-lg">
          practice on real interview question & get instant feedback
        </p>

        <button /*asChild*/ className="btn-primary ax-sm:w-full">
        Click here
        <a href="/interview"> Start an Inteview</a>
        </button>
        </div>
          <img src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
          </section>
        
        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>
          <div className="interviews-sections">
            {/* <p>You haven't taken any interviews yet</p> */}
            {dummyInterviews.map((interview) =>(
              <InterviewCard {...interview} key={interview.id}/>
            ))}

            {/* <p>You haven't taken any interviews yet</p> */}
          </div>
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Take an Inteview</h2>
          <div className="interview-section">
          {dummyInterviews.map((interview) =>(
              <InterviewCard {...interview} key={interview.id}/>
            ))}
          </div>
        </section>
       
        
     
    
    </>
    // <div>
    //   {/* Home Page */}
    // </div>
  )
}

export default page

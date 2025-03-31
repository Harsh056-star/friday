import dayjs from 'dayjs';
import Image from "next/image";
import {getRandomInterviewCover} from "@/public/utils"


const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  //if some one say technical or say mix of technical and behavior
  const normalizedType=/mix/gi.test(type) ? "Mixed" : type;//what is that
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now() ).format('MMM D, YYYY')
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <img src={getRandomInterviewCover()} alt="cover image" width{90} height={90} className="rounded-full object-fit size-[90px]"/>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard

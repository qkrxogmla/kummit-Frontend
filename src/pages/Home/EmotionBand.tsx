
import type { bands } from "../../types/type";
import BandInfo from "./BandInfo"
import SongInfo from "./SongInfo"

const EmotionBand = ({
    creatorName,
    emotion,
    description, endTime, likeCount,
    peopleCount,
    songCount,
    commentCount,
    liked }: bands) => {

    return (

        <div className="flex w-96 h-44 
        bg-white rounded-[20px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] border border-white">
            <div>
                {emotion}
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div>{creatorName}</div>
                    <div className="flex">
                        <img src="/icons/Time-Circle.svg" alt="시계 아이콘" />
                        {endTime}
                    </div>
                </div>

                <div>
                    {description}
                </div>

                <SongInfo albumImg={"img"} title={"title"} singer={"singer"} />

                <BandInfo manCount={peopleCount} songCount={songCount}
                    commentCount={commentCount} heartCount={likeCount} liked={liked} />

            </div>

        </div >
    )
}

export default EmotionBand
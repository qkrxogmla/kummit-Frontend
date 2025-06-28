import { useEffect, useState } from "react"
import BottomBar from "../../components/BottomBar"
import UpperNavBar from "../../components/UpperNavBar"
import CreateBandButton from "./CreateBandButton"
import EmotionBand from "./EmotionBand"
import { dummyTopEmotionBands } from "../../apis/home"
import type { bands, TopBands } from "../../types/type"

const HomePage = () => {
    const [topBands, setTopBands] = useState<TopBands>();

    useEffect(() => {
        setTopBands(dummyTopEmotionBands);
        console.log(topBands)
    }, [])

    return (
        // <div>
        <div className="max-w-[412px] h-[917px] mx-auto overflow-y-scroll">
            <UpperNavBar isCanBack={false} text="Emotion Band" />
            <CreateBandButton />
            <div>
                <div className="flex justify-between">
                    <div className="justify-start text-black text-xl font-normal font-['Inter'] leading-normal">지금 인기있는 감정 밴드</div>
                    <div className="w-12 h-6 px-2 py-1 bg-stone-300 rounded-[20px] inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-stone-600 text-xs font-normal font-['SF_Pro'] leading-none">실시간</div>
                    </div>
                </div>

                {topBands !== undefined ?
                    // {topBands?.popularBands ?
                    <>
                        {topBands.popularBands.map((bandUnit: bands) => {
                            return <EmotionBand key={bandUnit.id} {...bandUnit} />
                        })}
                    </>
                    :
                    <>추후 빈 카드 임시 출력하도록 </>}

            </div>
            <div>
                <div className="flex justify-between">
                    <div className="justify-start text-black text-xl font-normal font-['Inter'] leading-normal">전체 감정 밴드</div>
                    <div className="w-12 h-6 px-2 py-1 bg-stone-300 rounded-[20px] inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-stone-600 text-xs font-normal font-['SF_Pro'] leading-none">XX개</div>
                    </div>
                </div>


                {topBands !== undefined ?
                    <>
                        {topBands.allBands.map((bandUnit: bands) => {
                            return <EmotionBand key={bandUnit.id} {...bandUnit} />
                        })}
                    </>
                    :
                    <>추후 빈 카드 임시 출력하도록 </>}
            </div>
            <BottomBar />
        </div >

    )
}

export default HomePage
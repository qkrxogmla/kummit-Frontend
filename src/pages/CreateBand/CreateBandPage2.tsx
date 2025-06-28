import UpperNavBar from "../../components/UpperNavBar";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MusicSearchBar from "../../components/MusicSearchBar";

const CreateBandPage2 = () => {
  const [music, _setMusic] = useState<string | null>(null);
  const location = useLocation();
  const { selectedEmotion } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] bg-[#F3EEEF]">
        <UpperNavBar isCanBack={true} text="감정 밴드 생성" />
        <div className="flex justify-center mt-1 mx-[2px] gap-[5px] ">
          <p className="w-[400px] h-1 bg-[#C77EB5] rounded-lg"></p>
        </div>
        <div className="flex flex-col items-center relative">
          <p className="my-[43px] text-lg text-[16px]">
            "{selectedEmotion}"을 표현할 음악을 찾아보세요
          </p>
          <MusicSearchBar />
          <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 flex justify-center gap-4">
            <button
              className="w-[172px] h-[40px] py-3 bg-white text-303030; rounded-[8px] flex items-center justify-center"
              onClick={() => navigate(-1)}
            >
              <img className="w-5 h-5 mr-3" src="./icons/button_back.svg" />{" "}
              이전
            </button>
            <button
              className={`w-[172px] h-[40px] py-3 text-white rounded-[8px] flex items-center justify-center ${
                music ? "cursor-pointer bg-[#C77EB5]" : "bg-[#dfb5d5]"
              }`}
              disabled={!music}
              onClick={() => navigate("/home")}
            >
              <img className="w-4 h-4 mr-2" src="./icons/Music-on.svg" />
              밴드 만들기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBandPage2;

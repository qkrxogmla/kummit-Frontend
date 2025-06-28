import MotionButton from "../../components/MotionButton";

const CreateBandPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] bg-[#F3EEEF]">
        <div className="flex justify-center mt-1 mx-[2px] gap-[5px]">
          <p className="w-[195px] h-1 bg-[#C77EB5]"></p>
          <p className="w-[195px] h-1 bg-[#D9D9D9]"></p>
        </div>
        <div className="flex items-center mb-6 pt-[38px]">
          <img src="./icons/pencil.svg" className="ml-[59px] w-6 h-6 " />
          <span className="ml-[19px] text-lg text-[16px]">
            지금 느끼는 감정을 선택해 주세요
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="w-[360px] bg-white px-[28px] pt-[34px] pb-[19px] rounded-2xl shadow-md">
            <p className="mb-1.5 ml-[7px] text-[14px]">인기 감정</p>
            <div className="flex flex-wrap ">
              <MotionButton motion="기쁨" />
              <MotionButton motion="슬픔" />
              <MotionButton motion="그리움" />
              <MotionButton motion="설렘" />
              <MotionButton motion="평온함" />
              <MotionButton motion="외로움" />
              <MotionButton motion="희망" />
              <MotionButton motion="감사" />
              <MotionButton motion="분노" />
              <MotionButton motion="불안" />
            </div>
            <span className="ml-[7px] block mt-6 mb-2 text-[14px]">
              또는 직접 입력
            </span>
            <input
              className="w-[293px] h-[48px] border ml-[5px] border-[#D9D9D9] rounded-lg p-3 focus:outline-none focus:border-[#979797]"
              placeholder="감정을 입력해 주세요"
            ></input>
          </div>

          <button className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 w-[347px] h-[40px] py-3 bg-[#C77EB5] text-white rounded-[8px] flex items-center justify-center">
            다음 단계
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBandPage;

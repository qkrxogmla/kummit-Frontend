import BottomBar from "../../components/BottomBar";
import MyPage from "../My/MyPage";
import UpperNavBar from "../../components/UpperNavBar";

const HomePage = () => {
  return (
    <div>
      <div>+ 감정 밴드 만들기</div>
      <div>
        인기 있는 감정 밴드
        <div>
          <UpperNavBar
            isCanBack={false}
            text="Emotion Band"
            OptionImage="/icons/logo.svg"
          />
          <div>+ 감정 밴드 만들기</div>
          <div>
            인기 있는 감정 밴드
            <div>
              인기 감정 밴드 리스트
              <div>
                감정 이름 남은 시간 코멘트 앨범 이미지 노래 제목 가수 이름 참여
                인원 삽입된 노래 개수 코멘트 개수 공감 개수
              </div>
            </div>
          </div>
          <div>
            전체 감정 밴드
            <div>전체 감정 밴드 리스트</div>
          </div>
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

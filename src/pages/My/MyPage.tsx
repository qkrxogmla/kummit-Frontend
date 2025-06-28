import BottomBar from "../../components/BottomBar";
import MyCard from "./MyCard";
import MyCreatedBands from "./MyCreatedBands";
import MyLikedBands from "./MyLikedBands";
import BandsArchive from "./BandsArchive";
import AppBar from "./AppBar";

const MyPage = () => {
  return (
    <div className="max-w-[412px] h-[917px] mx-auto overflow-y-scroll">
      <AppBar />
      <MyCard />
      <MyCreatedBands />
      <MyLikedBands />
      <BandsArchive />
      공감한 밴드 UI 감정 밴드 아카이브 UI 사용자 기록 UI 컴포넌트 조합 UI API
      <BottomBar />
    </div>
  );
};

export default MyPage;

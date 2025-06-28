import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        //서버로 닉네임, 비밀번호 전송 및 사용자 정보 받기
        navigate('/home');
    }
    return (
        <div>
            <div>
                <h1>이모션 밴드 로고</h1>
            </div>
            <div className="flex flex-col m-5">
                <input placeholder="닉네임을 입력해주세요" />
                <input placeholder="비밀번호를 입력해주세요" />
                <button onClick={handleClick}>로그인</button>
            </div>

        </div>

    )
}

export default LoginPage;
import { useNavigate } from "react-router-dom"

const BottomBar = () => {
    const navigate = useNavigate()
    const handleClickHome = () => {
        navigate('/home')
    }
    const handleClickCreate = () => {
        navigate('/create')
    }
    const handleClickMy = () => {
        navigate('/my')
    }
    return (
        <div className="flex justify-between">
            <div onClick={handleClickHome}>
                홈
            </div>
            <div onClick={handleClickCreate}>
                +
            </div>
            <div onClick={handleClickMy}>
                My
            </div>
        </div>
    )
}

export default BottomBar
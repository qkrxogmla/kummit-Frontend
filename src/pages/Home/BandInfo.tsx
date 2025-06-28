type BandInfoProps = {
    manCount: number;
    songCount: number;
    commentCount: number;
    heartCount: number;
    liked: boolean;
}
const BandInfo = ({ manCount, songCount, commentCount, heartCount, liked }: BandInfoProps) => {

    return (
        <div className="flex">
            <div className="flex">
                <img src="/icons/people.svg" alt="참여인원" />
                {manCount}
            </div>
            <div className="flex">
                <img src="/icons/song-folder.svg" alt="노래개수" />
                {songCount}
            </div>
            <div className="flex">
                <img src="/icons/comment_icon.svg" alt="코멘트개수" />
                {commentCount}
            </div>
            <div className="flex">
                {liked ?
                    <img src="/icons/Heart.svg" alt="공감됨" /> :
                    <img src="/icons/Heart-off.svg" alt="공감안됨" />
                }
                <img src="/icons/Heart.svg" alt="공감개수" />
                {heartCount}
            </div>
        </div>

    )
}

export default BandInfo;
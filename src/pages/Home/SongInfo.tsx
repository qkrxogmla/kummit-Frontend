type SongInfoProps = {
    albumImg: string;
    title: string;
    singer: string;
}

const SongInfo = ({ albumImg, title, singer }: SongInfoProps) => {

    return (
        <div className="flex flex-row">
            <div>
                <img src={albumImg} alt="앨범" />
            </div>
            <div className="flex flex-col">
                <div>
                    {title}
                </div>
                <div>
                    {singer}
                </div>
            </div>
        </div>
    )
}

export default SongInfo;
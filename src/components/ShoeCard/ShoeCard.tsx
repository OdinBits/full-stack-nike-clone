import { IShoeCard } from "../../shared/interfaces/IShoeCard";
import "./style.scss";


const ShoeCard: React.FC<IShoeCard.props> = ({ imgUrl, handleImg, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgUrl.bigShoe) {
            handleImg(imgUrl.bigShoe)
        }
    }

    return (
        <div
            className={`shoeDiv ${bigShoeImg === imgUrl ? "activeDiv" : "inActiveDiv"}`}
            onClick={handleClick}
        >
            <div className="imgContainer">
                <img
                    src={imgUrl.thumbnail}
                    alt="show collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard

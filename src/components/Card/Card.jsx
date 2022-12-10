import "./card.scss"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    <img src={item.img} alt="" className="firstImg" />
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <div className="card__info">
                    <h2>{item.title}</h2>
                    <div className="price">
                        <h3>₫‌{item.price}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
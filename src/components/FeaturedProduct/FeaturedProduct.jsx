import "./featuredProduct.scss"
import { featuredData } from "../../constants/data"
import Card from "../Card/Card"

const FeaturedProduct = ({ type }) => {
    return (
        <div className="featuredProduct">
            <div className="title">
                <h1>{type} Product</h1>
            </div>
            <div className="featuredItem">
                {featuredData.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduct
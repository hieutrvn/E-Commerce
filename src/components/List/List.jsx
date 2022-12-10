import "./list.scss"
import { productsData } from "../../constants/data"
import Card from "../Card/Card"

const List = () => {
    return (
        <div className="list">
            {productsData?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List
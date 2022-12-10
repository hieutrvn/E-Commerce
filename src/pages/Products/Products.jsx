import { useState } from "react"
import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import "./products.scss"
const Products = () => {
    const catID = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(9999999)
    const [sort, setSort] = useState(null)
    console.log(catID)


    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Type</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">ACCESSORY</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">TOPS</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">BOTTOMS</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="4" value={4} />
                        <label htmlFor="4">FOOTWEAR</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="filterPrice">
                        <span>0</span>
                        <input type="range" min={0} max={9999999} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value="asc" onChange={(e) => setSort("asc")} />
                        <label htmlFor="asc">Price  (Lowest First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="des" value="des" onChange={(e) => setSort("des")} />
                        <label htmlFor="des">Price  (Highest First)</label>
                    </div>

                </div>
            </div>
            <div className="right">
                <List catID={catID} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Products
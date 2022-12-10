import "./product.scss"
import { productData } from "../../constants/data"
import { useState } from "react"

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={productData[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={productData[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={productData[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Essentials Crewneck</h1>
                <span>₫‌2,131,700</span>
                <p>
                    The signature Essentials crewneck is updated with a flocked logo treatment inspired by vintage athletic wear. The velvety Essentials Fear of God logo is on the left chest and across the back, while an Essentials rubberized label is stitched above. A rib-knit collar, cuffs, and waist hem frame the piece.
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
                    ADD TO CART
                </button>
                <div className="details">
                    <span>ALL SALES OF THIS ITEM ARE FINAL.</span>
                    <p>
                        CLASSIC ESSENTIALS FIT <br />
                        80% COTTON / 20% POLYESTER HEAVYWEIGHT FLEECE<br />
                        ESSENTIALS FEAR OF GOD FLOCKED LOGO ON CHEST<br />
                        ESSENTIALS FEAR OF GOD FLOCKED LOGO ON BACK<br />
                        ESSENTIALS RUBBERIZED LABEL<br />
                        RIB-KNIT COLLAR, CUFFS AND WAIST HEM<br />
                        IMPORTED<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product
import "./cart.scss"
import { useState } from "react"

const Cart = () => {



    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/1003/3354/products/Front_2421ccae-f54e-46e6-ba46-dd4a37fdeda6_1920x.jpg?v=1666656285",
            img2: "https://cdn.shopify.com/s/files/1/1003/3354/products/Back_4adc2d28-0bf5-4d0d-b404-f2ce62cdf11f_1920x.jpg?v=1666656285",
            title: "Essentials Crewneck",
            isNew: true,
            desc: "lorem",
            price: 2134400,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/1003/3354/products/Front_2421ccae-f54e-46e6-ba46-dd4a37fdeda6_1920x.jpg?v=1666656285",
            img2: "https://cdn.shopify.com/s/files/1/1003/3354/products/Back_4adc2d28-0bf5-4d0d-b404-f2ce62cdf11f_1920x.jpg?v=1666656285",
            title: "Essentials Crewneck",
            isNew: true,
            desc: "lorem",
            price: 2134400,
        },
    ]

    return (
        <div className="cart">
            <div className="headCart">
                <h1>Shopping Cart</h1>
                <span >Back</span>
            </div>
            {data?.map(item => (
                <div className="item">
                    <div className="itemInfo">
                        <img src={item.img} alt="" />
                        <div className="detail">
                            <h1>{item.title}</h1>
                            <p>{item.desc?.substring(0, 100)}</p>
                            <div className="price">1 x ${item.price}</div>
                        </div>
                    </div>
                    <div className="remove">Remove</div>
                </div>
            ))}
            <div className="total">
                <span>Subtotal:</span>
                <span>$123</span>
            </div>
            <button>Checkout</button>
            <button>Continue Shopping</button>
        </div>
    )
}

export default Cart
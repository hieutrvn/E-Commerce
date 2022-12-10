import "./navbar.scss"
import { Link } from "react-router-dom"
import { BsSearch, BsPersonCircle, BsCart3 } from "react-icons/bs"
import { useState } from "react"
import Cart from "../Cart/Cart"
const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const handleScroll = () => {
        if (window.scrollY >= 60) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    window.addEventListener('scroll', handleScroll)


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link to={"/products/1"} >Women</Link>
                    </div>
                    <div className="item">
                        <Link to={"/products/2"}>Men</Link>
                    </div>
                    <div className="item">
                        <Link to={"/products/3"}>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link to={"/"}>HIEUTRVN</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link to={"/"}>
                            Search
                        </Link>
                    </div>
                    <div className="item">
                        <Link to={"/"}>
                            Account
                        </Link>
                    </div>
                    <div className="item">
                        <div className="cartItem" onClick={() => setOpen(!open)}>
                            Bag
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar
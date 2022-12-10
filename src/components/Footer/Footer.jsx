import "./footer.scss"
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"
const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="top">
                    <div className="item">
                        <h1>Category</h1>
                        <span>Women</span>
                        <span>Men</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                        <span>New Arrivals</span>
                    </div>
                    <div className="item">
                        <h1>Links</h1>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Stores</span>
                        <span>Compare</span>
                        <span>Cookies</span>
                    </div>
                    <div className="item">
                        <h1>Contact</h1>
                        <span>
                            <BsFacebook className="icon" />
                            Facebook
                        </span>
                        <span>
                            <BsGithub className="icon" />
                            Github
                        </span>
                        <span>
                            <BsInstagram className="icon" />
                            Instagram
                        </span>

                    </div>
                    <div className="item">
                        <h1>About</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores sit, sunt, eos error quibusdam accusamus nemo necessitatibus delectus harum rerum! Amet obcaecati asperiores consequuntur aperiam sint, ex facilis doloremque!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
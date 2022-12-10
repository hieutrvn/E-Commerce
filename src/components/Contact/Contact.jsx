import "./contact.scss"
import { BsArrowRight } from "react-icons/bs"

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <p className="title">Join the Conversation</p>
                <div className="email-container">
                    <input placeholder="EMAIL ADDRESS" type="email" />
                    <button>
                        <BsArrowRight className="icon" />
                    </button>
                </div>
            </div>
            <div className="right">
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="#" className="footer-item--link">LOCATION: VIETNAM</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-item--link">CLIENT SERVICES</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
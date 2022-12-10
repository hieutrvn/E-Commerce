import { Link } from "react-router-dom"
import "./categories.scss"


const Categories = () => {
    return (
        <div className="categories">
            <div className="cards">
                <Link to={"/products/1"}>
                    <div className="card">
                        <img src="https://cdn.accentuate.io/86036709437/1660611470851/Look_021.jpg?v=1660611470851" alt="" />
                        <span>Women</span>
                    </div>
                </Link>
                <Link to={"/products/2"}>
                    <div className="card">
                        <img src="https://cdn.accentuate.io/86036709437/1660611522802/Look_027.jpg?v=1660611522802" alt="" />
                        <span>Men</span>
                    </div>
                </Link>
                <Link to={"/products/3"}>
                    <div className="card">
                        <img src="https://cdn.accentuate.io/86036709437/1660611429038/Look_016.jpg?v=1660611429038" alt="" />
                        <span>Children</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Categories
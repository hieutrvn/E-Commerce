import "./home.scss"
import Slider from '../../components/Slider/Slider'
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"


const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProduct type={"Featured"} />
            <Categories />
            <FeaturedProduct type={"Trending"} />
            <Contact />
        </div>
    )
}

export default Home
import "./slider.scss"
import { slides } from "../../constants/data"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { useState } from "react"

const Slider = () => {

    // const data = [
    //     "https://images.squarespace-cdn.com/content/v1/5b4699e075f9eed87bdf04d2/1569270484029-HC566KA2WT6CQGDGELXJ/Su19_FOG_ALTON_LIFESTYLE_CF000438+C+Preview.jpg?format=750w",
    //     "https://images.squarespace-cdn.com/content/v1/5b4699e075f9eed87bdf04d2/1569270398966-KDOZW8XF78TBG96GW80Y/00150026.jpg?format=750w",
    //     "https://images.squarespace-cdn.com/content/v1/5b4699e075f9eed87bdf04d2/1569270443567-2YK5WZ0L83QXXSTJOU3B/image-asset.jpeg?format=750w",
    // ];

    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)

    }


    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {slides.map(item => (
                    <video src={item} autoPlay loop muted />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <AiOutlineArrowLeft />
                </div>
                <div className="icon">
                    <AiOutlineArrowRight onClick={nextSlide} />
                </div>
            </div>

        </div>
    )
}

export default Slider
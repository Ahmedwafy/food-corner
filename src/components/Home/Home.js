import "./Style.css"
import General from "../General/General"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <div className="home">

            <div className="container2">
                <div>
                    <h2>Food Corner</h2>
                </div>

                <button className="BTN">Learn More</button>
            </div>
            <General/>
            <Footer/>
        </div>
    ) 
}

export default Home

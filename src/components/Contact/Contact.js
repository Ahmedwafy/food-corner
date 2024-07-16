import "./Style.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="container5">
                <form className="form">
                    <input type="text" placeholder="Name..."/>
                    <input type="text" placeholder="Tele..."/>    
                    <input type="text" placeholder="Mail..."/>
                    <hr></hr>
                    <br></br>
                    <p>Suggestions to serve you better</p>
                    <br></br>
                    <textarea type="text" placeholder="..."></textarea>
                    <br></br>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
    
}
export default Contact
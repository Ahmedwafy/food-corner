import "./Order.css"

// onClose Prop to handle closing the order component
// button to close Order component onClick BY starts onClose prop
// onClose prop is a function make ...  setShowOrder(false)
const Order = ({onClose}) => {
    return (
       <div className="order">
            <div className="container">
                <div>
                    <h2>Thanks For Your Trust</h2>   
                    <p>Delivery in 40 minutes</p>               
                    <p>Please Fill Your Data</p>
                    <p className="ppp">Name*</p>
                    <input type="text" placeholder="name"/>
                    <hr/>
                    <p className="ppp">Phone Number*</p>
                    <input type="text" placeholder="Phone Number"/>
                    <hr/>
                    <p className="ppp">Address*</p>
                    <input type="text" placeholder="Address"/>
                    <hr/>
                    <br/>
                    <button>Order</button>
                    <button className="close-btn" onClick={onClose}>
                    Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order

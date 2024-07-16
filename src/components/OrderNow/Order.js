import "./Order.css"

// onClose Prop to handle closing the order component
// button to close Order component onClick BY starts onClose prop
// onClose prop is a function make ...  setShowOrder(false)
const Order = ({onClose}) => {
    return (
        <div className="order-container">
            <div>
                <h2>Thanks For Your Trust</h2>   
                <p>Delivery in 40 minutes</p>
                <p>Please Fill Your Data</p>
                <p>Name*</p>
                <input type="text" placeholder="name"/>
                <p>Phone Number*</p>
                <input type="text" placeholder="Phone Number"/>
                <p>Address*</p>
                <input type="text" placeholder="Address"/>
                <button>Order</button>
                <button className="close-btn" onClick={onClose}>
                 Close
                </button>
            </div>
        </div>
    )
}

export default Order
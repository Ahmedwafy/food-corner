import "./Style.css"
import React, { useEffect , useState} from "react"
import axios from "axios";
import Order from "../OrderNow/Order";

// use Hooks & Axios With Normal Function
// 1- import useState
// 2- ازاى اكتب الصيغة دى هنا فى فنكشن عادية
//          state = {
//            images : []
//          }
//   --------------------------
//         useState عن طريق استخدام 
//         
//   const [ images , setImages ] = useState([])
//   --------------------------
//
// componentDidMount() دى شغالة مع الكلام فنكشن فقط ايه المعوض ليها ؟
//                     المعوض ليها useEffect
//  
//        useEffect ( () => {
//         
//        } , [] )
//  
//  use empty array to avoid infinite loop

const General = () => {
    
    const [ Block , setBlock ] = useState([])

    // State to control order visibility
    const [showOrder, setShowOrder] = useState(false); 

    useEffect( () => {
        axios.get('/json/data.json')
        .then(res => {setBlock(res.data.images)})
        .catch(err => console.log(err))
    }, [])
        

    // .then( data => console.log(data))
    const NewBlock = Block.map((Ele) => {
        return (
            <div className="content" key={Ele.id}>
                <div className="info">
                    <h2>{Ele.title}</h2>
                    <h2>{Ele.offer}</h2>
                    <p>{Ele.details}</p>
                    <br/>
                    <p>{Ele.details}</p>

                    <button className="btn" onClick={() => setShowOrder(true)}>
                        Order Now
                    </button>

                </div>

                <div className="image">
                    <img src={Ele.image} alt=""/>
                </div>
            </div>
        )
    })
    return (
        <div className="General">
            <div className="container3">

                {NewBlock}

                {/* Conditionally render Order */}
                {/* {showOrder === true ? <Order onClose={() => setShowOrder(false)} /> : "" } */}
                {showOrder && <Order onClose={() => setShowOrder(false)} />}

            </div>
        </div>
    ) 
}

export default General
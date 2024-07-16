import "./Style.css"
import axios from "axios"
import React, {useState , useEffect} from "react"



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


const Branches = () => {

    const [ Branch , setBranch] = useState([])

    useEffect( () => {
        axios.get("/json/data.json")
        .then(res => {setBranch(res.data.branches)})
        .catch(err => console.log(err))
    },[]) 

    // .then( data => console.log(data))

    const NewBranch = Branch.map(ele => {
        return (
                <div className="branch" key={ele.id}>
                    <h3>{ele.name}</h3>
                    <p>{ele.address}</p>
                    <p>{ele.hours}</p>
                    <button>More Info</button>
                </div>
        )
    })


    return (
        <div className="Branches">
            <div className="container4">

                <form className="search" >
                    <h2>Find Nearest Location</h2>
                    <br></br>
                    <input type="text" placeholder="Find Branch"></input>
                    <button className="btn">Find</button>
                    {NewBranch}
                </form>

                <div className="image">
                    <img src="/images/map.png" alt=""></img>
                </div>                
            </div>
        </div>
    )
}

export default Branches
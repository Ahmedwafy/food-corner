import "./Style.css"
import axios from "axios"
import React, {useState , useEffect} from "react"




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

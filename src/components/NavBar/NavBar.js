import "./Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faContactBook, faDiagramProject, faEnvelope , faHouse} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"; 
// NavLink = preventdefault
// بيمنع ريلود الصفحة

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="container">

                <div className="logo">
                    <h2>
                    <i><FontAwesomeIcon icon={faBowlFood} /></i>
                    </h2>
                </div>

                <div className="logo-items">
                    <ul className="list">

                        <li>     
                            <NavLink exact to="/">
                                <div className="icon">
                                    <i><FontAwesomeIcon icon={faHouse} /></i>
                                </div>
                                <hr></hr>
                                <p>Home</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/About">
                            <div className="icon">
                                <i><FontAwesomeIcon icon={faContactBook} /></i>
                            </div>
                                <hr></hr>
                                <p>About</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Branches">
                                <div className="icon">
                                    <i><FontAwesomeIcon icon={faDiagramProject} /></i>
                                </div>
                                <hr></hr>
                                <p>Branches</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Contact">
                            <div className="icon">
                                <i><FontAwesomeIcon icon={faEnvelope} /> </i>
                            </div>
                                <hr></hr>
                                <p>Contact</p>
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>  
            </div>
        </div>
    )
}

export default NavBar
import { Link } from "react-router-dom";
import {AiOutlineMessage} from "react-icons/ai";
import {BsHospital} from "react-icons/bs";
import{MdOutlineBloodtype} from "react-icons/md";
import './CSS/Navbar.css';

export default function Navbar() {
    return(
        <div className="navbar">
            <Link to="/beskeder" className="beskeder">
            <h3> <span className="beskeder"><AiOutlineMessage/></span> Beskeder</h3>
            </Link>
            <Link to="/kommendetider" className="navbarsider">
            <h3> <span> <BsHospital/></span> Kommende tider</h3>
            </Link>
            <Link to="/provesvar" className="navbarsider">
            <h3><span> <MdOutlineBloodtype/></span> Prøvesvar</h3>
            </Link>
            <div className="id_info">
                <h3>Maiken Lund</h3>
                <h4>MaLund-31</h4>
            </div>
        </div>
    )
    
}
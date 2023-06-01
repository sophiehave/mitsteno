import './CSS/Beskeder.css';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-router-dom";

export default function Beskeder (){
    return(
        <div className='overblikbeskeder'>
            <h2>Beskeder</h2>
            <p>Her kan du vælge om du vil skrive en besked til en af dine behandlere, ellers kan du finde de beskeder du har modtagt fra dine behandlere.</p>

            <div className='valgbesked'>
                <Link to="/skrivbesked" className="linkklik"> 
                <div className='skrivikkeakut'>
                    <h3>Skriv en ikke akut besked til behandler</h3>
                    <p><MdOutlineKeyboardArrowRight/></p>
                </div>
                </Link>

                <Link to="/minebeskeder" className="linkklik">
                <div>
                    <h3>Læs dine beskeder</h3>
                    <p><MdOutlineKeyboardArrowRight/></p>
                </div>
                </Link>
            </div>
        </div>
    )
}
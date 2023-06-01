import './CSS/Kontakt.css';
import {IoIosCall} from 'react-icons/io';
import {AiOutlineMessage} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Kontakt(){
    return(
        <div>
            <div className='kontaktinformation'>
                <h2>Kontakt</h2>
                <p>Her kan du finde de forskellige muligheder for at kontakte dine behandler eller dit Steno.</p>
            </div>
            <div className='kontaktmetoder'>
                <div className='ring'>
                    <h3 className='kontaktikon'><IoIosCall/></h3>
                    <p>Ring til Steno på <strong>39 68 08 00</strong></p>

                </div>
                <Link to="/skrivbesked" className="linkklik">
                <div className='skriv'>
                    <h3 className='kontaktikon'><AiOutlineMessage/></h3>
                    <p><a href="#" className='skrivlink'><span>Klik her</span> for at skrive en ikke akut besked til en af dine behandler</a></p>
                </div>
                </Link>

            </div>
        </div>
    )
}
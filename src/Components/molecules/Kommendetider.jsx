import './CSS/Kommendetider.css';
import {BsHospital} from "react-icons/bs";
import { Link } from "react-router-dom";

let kommendetiderpaasteno = [
    {
        dato: <div className='dato'>30 juni 2023</div>,
        besog: <div className='besog'>Ambulant besøg</div>,
        behandler: <div className='behandler'>Læge O. Hansen</div>,
        sted: <div className='sted'>Diabetesklinikken</div>
    }
]

function kommendetidellerej(){
    if(kommendetiderpaasteno.length>0){
        return(
            <div>
        {kommendetiderpaasteno.map(({ dato, besog, behandler, sted }, i) => {
            return(
                <div className='kommendetidspunkt'>
                <div className='ikonoginfo'>
                    <h2><BsHospital/></h2>
                    <div dato={dato} besog={besog} behandler={behandler} sted={sted} key={i} >
                        {dato}
                        <br />
                        {besog}
                        <br />
                        {behandler}
                        <br />
                        {sted}
                    </div>
                </div>
            <div className='kommendetidknap'>
                
            <Link to="/skrivbesked" className="linkklik">
                <button>Skriv besked</button>
             </Link>
                 <button>Annuller tid</button>
            </div>
        </div>
                )
        })}
        </div>
           )
    }else{
        return(
            <p className='Ingenkommendetid'>Du har ikke nogle kommende tider på Steno på nuværende tidspunkt. Venligst hold øje med din e-boks for næste kommende tid.</p>

        )
    }
}

export default function Kommendetider() {
    return(
        <div className='kommendetider'>
            <h2>Kommende tider</h2>
            <p>Her får du et overblik over dine kommende tider på Steno. Du kan se hvilken dato, behandler, og forløb du skal have. Du har også mulighed for at annullere din tid, hvis du ikke har mulighed for at komme alligevel.</p>

            {kommendetidellerej()}
            </div>
    )

}